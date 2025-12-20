import React, { useEffect, useRef, useState } from 'react'
import { Box, Spinner, Text } from '@chakra-ui/react'

// Provide your Google Maps JS API key as VITE_GOOGLE_MAPS_API_KEY in your .env file
// Example: VITE_GOOGLE_MAPS_API_KEY=YOUR_KEY
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('No window'))
    if (window.google && window.google.maps) return resolve()

    const existing = document.querySelector(`script[src="${src}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('Script failed to load')))
      return
    }

    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('Script failed to load'))
    document.head.appendChild(s)
  })
}

export default function OfficeMap({ address = '', height = 300 }) {
  const mapRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!address) {
      setError('No address provided')
      setLoading(false)
      return
    }

    if (!GOOGLE_API_KEY) {
      // no API key: we'll use iframe embed fallback, so stop loading state
      setLoading(false)
      return
    }

    const src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=weekly`
    loadScript(src)
      .then(() => {
        if (!window.google || !window.google.maps) {
          throw new Error('Google Maps not available')
        }
        const geocoder = new window.google.maps.Geocoder()
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            const loc = results[0].geometry.location
            const map = new window.google.maps.Map(mapRef.current, {
              center: loc,
              zoom: 16,
              streetViewControl: false,
              mapTypeControl: false,
            })
            new window.google.maps.Marker({ position: loc, map, title: 'Qualis Pest Control - Gauteng Office' })
            setLoading(false)
          } else {
            setError('Could not locate the address on the map')
            setLoading(false)
          }
        })
      })
      .catch((e) => {
        console.error('Google Maps failed to load', e)
        setError('Failed to load Google Maps')
        setLoading(false)
      })
  }, [address])

  if (!GOOGLE_API_KEY) {
    const q = encodeURIComponent(address)
    return (
      <Box as="iframe" src={`https://www.google.com/maps?q=${q}&output=embed`} width="100%" height={height} border="0" />
    )
  }

  if (error) {
    return (
      <Box height={height} display="flex" alignItems="center" justifyContent="center">
        <Text>{error}</Text>
      </Box>
    )
  }

  return (
    <Box position="relative" height={height}>
      {loading && (
        <Box position="absolute" inset="0" display="flex" alignItems="center" justifyContent="center" zIndex={1} bg="whiteAlpha.800">
          <Spinner />
        </Box>
      )}
      <Box ref={mapRef} height="100%" width="100%" />
    </Box>
  )
}
