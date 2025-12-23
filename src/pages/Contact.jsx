import React, { useState } from 'react'
import { Container, Heading, Text, Box, Link, SimpleGrid, FormControl, FormLabel, Input, Textarea, Button, Stack, useToast } from '@chakra-ui/react'
import Breadcrumbs from '../components/Breadcrumbs'
import OfficeMap from '../components/OfficeMap'
import Hero from '../components/Hero'
import SEO from '../components/SEO'

export default function Contact(){
  const pageTitle = 'Contact'
  const pageDescription = 'Contact Qalis Pest Control in Cosmo City for fast, professional pest control services. Call 078 508 2382 or message on WhatsApp for urgent assistance and free quotes.'
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(null)
  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? import.meta.env.VITE_ACCESS_KEY ?? null
  if (!ACCESS_KEY) {
    // Vite env variable should be set: VITE_WEB3FORMS_KEY
    console.warn('Missing VITE_WEB3FORMS_KEY; contact form will not submit.')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData(e.target)
    if (!ACCESS_KEY) {
      toast({ title: 'Contact form unavailable', description: 'Missing VITE_WEB3FORMS_KEY; message will not be sent. Please contact the site administrator.', status: 'error', duration: 6000, isClosable: true })
      setIsLoading(false)
      return
    }
    formData.append('access_key', ACCESS_KEY)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()

      if (data.success) {
        toast({ title: 'Message sent', description: 'We will reply as soon as possible.', status: 'success', duration: 4000, isClosable: true })
        e.target.reset()
        setResult('success')
      } else {
        toast({ title: 'Could not send message', description: data.message || 'Please try again later.', status: 'error', duration: 6000, isClosable: true })
        setResult('error')
      }
    } catch (err) {
      toast({ title: 'Error', description: 'Unable to send message. Please try again later.', status: 'error', duration: 6000, isClosable: true })
      setResult('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>      <SEO title={pageTitle} description={pageDescription} image="/assets/logo.webp" />      <Hero image="/assets/images/webp-images/contact-us.webp" title="Contact Us" description="Need help right away? Call or message us for a free quote — we typically respond within a few hours. Emergency call-outs available." kicker="CONTACT" />

      <Box textAlign="center" py={6} bg="white" mt={-6} mb={6} boxShadow="sm" borderRadius="md" px={4}>
        <Text fontSize="lg" fontWeight={700}>We're ready to help — fast, friendly, and transparent.</Text>
        <Text mt={2} color="gray.700">Call us at <Link href="tel:0785082383" color="brand.500" fontWeight={600}>078 508 2382</Link> or message us on <Link href="https://wa.me/27785082382" color="brand.500" fontWeight={600}>WhatsApp</Link>. We provide free, no‑obligation on‑site assessments, clear treatment plans, and honest, up‑front pricing. We often schedule same‑day visits when available.</Text>
      </Box>
    <Container maxW="1100px">
      <Breadcrumbs />

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={6}>
        <Box as="form" p={4} bg="white" borderRadius="md" boxShadow="sm" onSubmit={handleSubmit}>
          <input type="hidden" name="subject" value="New message from website" />
          <Box mb={4} p={4} bg="brand.500" color="white" borderRadius="md" border="1px solid" borderColor="brand.600">
            <Text fontWeight={700}>Need immediate help? We’ll come to you.</Text>
            <Text mt={1} color="whiteAlpha.900">Call <Link href="tel:0785082383" color="whiteAlpha.900" fontWeight={600}>078 508 2382</Link> or <Link href="https://wa.me/27785082382" color="whiteAlpha.900" fontWeight={600}>message us on WhatsApp</Link> — our team provides free, no‑obligation on‑site assessments, clear treatment plans, and honest, up‑front pricing. Fast response and flexible appointments.</Text>
          </Box>
          <Stack spacing={3}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" placeholder="Full name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" placeholder="you@example.com" />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input name="phone" placeholder="078 508 2382" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea name="message" placeholder="How can we help you?" rows={6} />
            </FormControl>
            <Button type="submit" colorScheme="brand" isLoading={isLoading}>Send Message</Button>
            {result === 'success' && <Text color="green.600" fontWeight={600}>Thanks — we will reply as soon as possible.</Text>}
            {result === 'error' && <Text color="red.600" fontWeight={600}>Something went wrong. Please try again later.</Text>}
          </Stack>
        </Box>

        <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
          <Heading size="sm">Gauteng Office</Heading>
          <Text mt={2}>9191 Trailand Crescent, Cosmo City, Randburg, 2188</Text>
          <Text mt={2}>Phone: <Link color="brand.500" href="tel:0785082383">078 508 2382</Link></Text>
          <Text>Email: <Link color="brand.500" href="mailtoqalis.pestcontrol@gmail.com">qalis.pestcontrol@gmail.com</Link></Text>
          <Box mt={4} borderRadius="md" overflow="hidden" border="1px solid" borderColor="gray.100">
            <OfficeMap address="9191 Trailand Crescent, Cosmo City, Randburg, 2188" height={250} />
          </Box>
        </Box>

        <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
          <Heading size="sm">Free State Office</Heading>
          <Text mt={2}>2151 Section K, Botshabelo, 9781</Text>
          <Text mt={2}>Phone: <Link color="brand.500" href="tel:0785082383">078 508 2382</Link></Text>
          <Text>Email: <Link color="brand.500" href="mailto:qalis.pestcontrol@gmail.com">qalis.pestcontrol@gmail.com</Link></Text>
        </Box>
      </SimpleGrid>

      <Box mt={6} textAlign="center">
        <Text fontWeight={700}>Call us now: <Link color="brand.500" href="tel:0785082383">078 508 2382</Link></Text>
      </Box>
    </Container>
    </>
  )
}
