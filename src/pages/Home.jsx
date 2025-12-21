import React from 'react'
import { Box, Heading, Text, Grid, GridItem, Button, Container, Stack, SimpleGrid, Link, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import ClientCard from '../components/ClientCard'
import Breadcrumbs from '../components/Breadcrumbs'
import SEO from '../components/SEO'

export default function Home(){
  const services = [
    { img: '/assets/images/webp-images/images-9.webp', title: 'Soil Poisoning & Termite Protection', desc: 'Professional soil poisoning and termite baiting services — pre-construction and remedial treatments to protect foundations and structures with monitoring and reporting.' },
    { img: '/assets/images/webp-images/image-2.webp', title: 'General Pest Control', desc: 'Targeted treatments for household and commercial pests — cockroaches, ants, fleas, ticks, bedbugs, bees and flies. Full inspection, integrated treatment plan and follow-up visits to ensure long-term control.' },
    { img: '/assets/images/webp-images/image-1.webp', title: 'Rodent Control', desc: 'Comprehensive rodent management: inspection, humane removal, baiting, trapping and proofing to prevent re-infestation. Includes sanitation advice and ongoing monitoring.' },
  ]

  const clients = [
    { name: 'Wonder Park — Mug anf Beans', contactPerson: 'Tisetso / Johanna', phone: '012 004 0180', altPhone: '064 620 1941', services: 'Rats, Cockroaches, Flies', since: '01 Nov, 2024', work: 'Monthly preventative maintenance, ant and cockroach baiting, and sanitation guidance to reduce infestations.' },
    { name: 'Debonairs / Engine', contactPerson: 'Yone', phone: '012 004 0180', altPhone: '078 188 2339', services: 'Pest Maintenance', since: '02 Jan, 2025', work: 'On-site pest maintenance including fly control, rodent monitoring and hygiene audits for food-service areas.' },
    { name: 'MINTIRHO ENTERPRISE', contactPerson: '—', phone: '078 634 7245', altPhone: '', services: 'Soil Poisoning, Termites', since: '02 Jan - 20 Dec', work: 'Termite soil poisoning, remedial treatment around foundations and ongoing monitoring reports.' }
  ]

  return (
    <>
      <SEO title="Pest Control Cosmo City" description="Qalis Pest Control — Trusted pest control in Cosmo City. Soil poisoning, termite treatment, general pest control (cockroaches, fleas, ticks, bees) and rodent management. Call 078 508 2383." image="/assets/logo.webp" />
      <Hero />

      <Container maxW="1100px">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center" my={8}>
          <Box>
            <Image src="/assets/images/webp-images/image-8.webp" alt="Owner with certificate" borderRadius="md" boxShadow="md" objectFit="cover" width="100%" maxH={{ base: '160px', md: '280px' }} loading="lazy" />
          </Box>

          <Box>
            <Heading size="lg">Licensed & Accredited</Heading>
            <Text mt={3} color="gray.700">Qalis Pest Control is fully licensed and insured. Our technicians are certified and trained to deliver safe, effective pest management tailored to residential and commercial needs.</Text>
            <Text mt={2} color="gray.700"><strong>P-number:</strong> <span style={{whiteSpace: 'nowrap'}}>P-XXXXX</span></Text>
            <Text mt={2} color="gray.600">Request a copy of our certificate or contact us to verify credentials and insurance details.</Text>

            <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} mt={4}>
              <Button as={RouterLink} to="/contact" colorScheme="brand">Contact Us</Button>
              <Button as="a" href="/assets/images/webp-images/image-8.webp" target="_blank" rel="noopener noreferrer" variant="ghost">View Certificate</Button>
            </Stack>
          </Box>
        </SimpleGrid>

        <Breadcrumbs />
        <Box className="h-section">
          <Heading size="lg">Our Services</Heading>
          <Text mt={2} color="gray.600">Comprehensive pest control solutions crafted for your home and business.</Text>

          <SimpleGrid columns={[1,2,3]} spacing={4} mt={4}>
            {services.map(s => (
              <Link as={RouterLink} to="/services" key={s.title} _hover={{ textDecoration: 'none' }}>
                <Box transition="transform .15s" _hover={{ transform: 'translateY(-6px)' }}>
                  <ServiceCard img={s.img} title={s.title} desc={s.desc} />
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Box>

        <Box className="h-section">
          <Heading size="lg">Selected Clients</Heading>
          <Text mt={2} color="gray.600">Trusted by businesses and institutions across Gauteng and the Free State.</Text>

          <SimpleGrid columns={[1,2,3]} spacing={4} mt={4}>
            {clients.map(c => <ClientCard key={c.name} {...c} />)}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  )
}
