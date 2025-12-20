import React from 'react'
import { Container, Heading, Text, UnorderedList, ListItem, Box, SimpleGrid, Image, Button, Stack } from '@chakra-ui/react'
import Breadcrumbs from '../components/Breadcrumbs'
import ClientCard from '../components/ClientCard'
import Hero from '../components/Hero'

export default function About(){
  const clients = [
    { name: 'Wonder Park — Mug anf Beans', contactPerson: 'Tisetso / Johanna', phone: '012 004 0180', altPhone: '064 620 1941', services: 'Rats & Mouse, Cockroaches, Flies', since: '01 Nov, 2024', work: 'Monthly maintenance and targeted baiting to protect food prep areas; routine hygiene checks and follow-ups.' },
    { name: 'Tsekane / Debonairs', contactPerson: 'Yone', phone: '012 004 0180', altPhone: '078 188 2339', services: 'Rats & Mouse, Cockroaches', since: '02 Jan, 2025', work: 'Rodent proofing, trap deployment and small structural repairs to remove entry points.' },
    { name: 'MINTIRHO ENTERPRISE', contactPerson: '—', phone: '078 634 7245', altPhone: '', services: 'Soil poisoning, Termites, Weed control', since: '02 Jan - 20 Dec', work: 'Large-scale termite treatments including soil poisoning and bait systems with monitoring.' },
    { name: 'Plus Butchery — Cosmo City', contactPerson: '—', phone: '060 289 1794', services: 'Rats & Mouse, Cockroaches', since: '—', work: 'Preventative maintenance and rapid response visits to ensure food-safety compliance.' }
  ]

  return (
    <>
      <Hero />
      <Container maxW="1100px">
      <Breadcrumbs />



      {/* MISSION / VISION + IMAGE */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={8} alignItems="center">
        <Box>
          <Heading size="md">Our Mission</Heading>
          <Text mt={3}>To provide dependable and eco-conscious pest control services that bring peace of mind and promote healthier, pest-free living and working environments.</Text>

          <Heading size="md" mt={6}>Our Vision</Heading>
          <Text mt={3}>To become South Africa’s most reliable pest control service provider, recognized for excellence, integrity, and outstanding customer care.</Text>
        </Box>

        <Box>
          <Image src="/assets/images/QualisPestControl/image-2.jpeg" alt="Team at work" borderRadius="md" boxShadow="md" objectFit="cover" width="100%" maxH={{ base: '160px', md: '280px' }} loading="lazy" />
        </Box>
      </SimpleGrid>

      {/* COMMITMENT / WHY US */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={8} alignItems="center">
        <Box>
          <Heading size="md">Why Choose Qalis</Heading>
          <Text mt={3} color="gray.700">We are committed to delivering expert pest management with professionalism, reliability and care. Our technicians are trained and certified, using proven methods and SABS-approved products safe for people and pets. We offer fast response times, flexible scheduling, transparent pricing and guaranteed results tailored to your needs.</Text>

          <UnorderedList mt={4} spacing={3}>
            <ListItem><strong>Skilled and certified technicians</strong> — trained in modern pest behaviour and treatment methods.</ListItem>
            <ListItem><strong>Environmentally friendly products</strong> — SABS-approved and pet-safe options.</ListItem>
            <ListItem><strong>Fast, discreet service</strong> — flexible appointments and minimal disruption.</ListItem>
            <ListItem><strong>Transparent pricing</strong> — clear quotes and ensured effectiveness.</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Image src="/assets/images/QualisPestControl/image-3.jpeg" alt="Inspection" borderRadius="md" boxShadow="md" objectFit="cover" width="100%" maxH={{ base: '160px', md: '280px' }} loading="lazy" />
        </Box>
      </SimpleGrid>

      {/* SERVICES SUMMARY */}
      <Box mt={10}>
        <Heading size="md">Our Services</Heading>
        <Text mt={3} color="gray.700">We offer a broad range of services from general pest control to specialized treatments. Below is a summary of key services — visit the Services page for full details and booking.</Text>
        <UnorderedList mt={4}>
          <ListItem>General Pest Control (ants, cockroaches, fleas, bedbugs, flies)</ListItem>
          <ListItem>Rodent Control (rats, mice, proofing)</ListItem>
          <ListItem>Termite Inspection & Treatment</ListItem>
          <ListItem>Fumigation Services and Warehouse Treatments</ListItem>
          <ListItem>Disinfection & Sanitization</ListItem>
          <ListItem>Bird Proofing and Exclusion</ListItem>
        </UnorderedList>
      </Box>

      {/* CLIENTS */}
      <Box mt={10}>
        <Heading size="md">Selected Clients</Heading>
        <Text mt={2} color="gray.600">Trusted by businesses across Gauteng and the Free State.</Text>

        <SimpleGrid columns={[1,2,3]} spacing={4} mt={4}>
          {clients.map(c => <ClientCard key={c.name} {...c} />)}
        </SimpleGrid>
      </Box>

      {/* CONTACT CTA */}
      <Box mt={10} bg="brand.500" color="white" p={{ base: 6, md: 8 }} borderRadius="md" textAlign="center" border="1px solid" borderColor="brand.600">
        <Heading size="md">Ready to protect your property?</Heading>
        <Text mt={2} color="whiteAlpha.900">Request a free, no-obligation quote or contact our office for immediate assistance.</Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} mt={4} justify="center">
          <Button as="a" href="/quote" bg="white" color="black" border="1px solid" borderColor="black" _hover={{ bg: 'gray.100' }}>Request a Quote</Button>
          <Button as="a" href="/contact" variant="outline" borderColor="black" color="black" _hover={{ bg: 'blackAlpha.50' }}>Contact the Team</Button>
        </Stack>
      </Box>

    </Container>
    </>
  )
}
