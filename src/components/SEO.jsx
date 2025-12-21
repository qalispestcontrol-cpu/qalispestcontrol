import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

export default function SEO({ title, description, image, keywords }){
  const siteTitle = 'Qalis Pest Control'
  const defaultDesc = 'Qalis Pest Control — Trusted pest control in Cosmo City and Randburg. We provide soil poisoning, termite treatment, rodent control, cockroach treatment, flea and tick control. Call 078 508 2383.'
  const location = useLocation()
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const url = `${origin}${location.pathname}`

  return (
    <Helmet>
      <title>{title ? `${title} — ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description ?? defaultDesc} />
      <meta name="keywords" content={keywords ?? 'Pest control Cosmo City, termite, soil poisoning, rodent control, cockroach'} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title ? `${title} — ${siteTitle}` : siteTitle} />
      <meta property="og:description" content={description ?? defaultDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image ?? '/assets/Logo.jpeg'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} — ${siteTitle}` : siteTitle} />
      <meta name="twitter:description" content={description ?? defaultDesc} />
      <meta name="twitter:image" content={image ?? '/assets/Logo.jpeg'} />
    </Helmet>
  )
}