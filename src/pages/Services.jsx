import React from 'react'
import { Container, Heading, SimpleGrid, Box, Text } from '@chakra-ui/react'
import ServiceCard from '../components/ServiceCard'
import Breadcrumbs from '../components/Breadcrumbs' 

export default function Services(){
  const services = [
    { img: '/assets/images/webp-images/image-10.webp', title: 'Soil Poisoning & Termite Protection', desc: 'Professional soil poisoning and termite baiting services — pre-construction and remedial treatments to protect foundations and structures with monitoring and reporting.' },
    { img: '/assets/images/webp-images/image-4.webp', title: 'General Pest Control', desc: 'Targeted treatments for household and commercial pests — cockroaches, ants, fleas, ticks, bedbugs, bees and flies. We perform a full inspection, recommend an integrated treatment plan and provide follow-up visits to ensure long-term control and peace of mind.' },
    { img: '/assets/images/webp-images/image-1.webp', title: 'Rodent Control', desc: 'Comprehensive rodent management including inspection, humane removal, baiting, trapping and proofing to prevent re-infestation. We also advise on sanitation and structural improvements to keep rodents out and protect your property.' },
    { img: '/assets/images/webp-images/image-3.webp', title: 'Termite Inspection & Treatment', desc: 'Expert termite inspections and treatments, from termiticide applications to baiting systems and pre-construction protection. We provide remedial work, reporting and ongoing monitoring to safeguard structures from costly damage.' },
    { img: '/assets/images/webp-images/image-5.webp', title: 'Disinfection & Sanitization', desc: 'Post-treatment disinfection and sanitization to reduce microbial load and support healthy environments. Ideal after pest activity, outbreaks, or where hygiene levels must be improved quickly and effectively.' },
    { img: '/assets/images/webp-images/image-6.webp', title: 'Bird Proofing', desc: 'Humane bird control solutions such as netting, spikes and exclusion systems designed to prevent roosting, nesting and contamination. We assess the site and implement long-term, maintenance-friendly solutions that protect building assets.' }
  ]



  return (
    <Container maxW="1100px">
      <Breadcrumbs />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
        <Box>
          <Box bg="brand.500" color="white" p={{ base: 6, md: 8 }} borderRadius="md" textAlign="left" border="1px solid" borderColor="brand.600">
            <Heading>Our Services</Heading>
            <Text mt={3} color="whiteAlpha.900">Comprehensive, safe and SABS-compliant pest control solutions crafted for homes and businesses. Below are some of our core services — click each for more details.</Text>
          </Box>
        </Box>

        <Box>
          <Text color="gray.600">Explore the detailed descriptions below — each service card includes a summary of the work we do and how it benefits you. Click Get a Quote to request a tailored service estimate.</Text>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={[1,2,3]} spacing={4} mt={8}>
        {services.map((s) => (
          <ServiceCard key={s.title} img={s.img} title={s.title} desc={s.desc} />
        ))}
      </SimpleGrid>

      <Text mt={6} color="gray.600">All work uses SABS-approved products and complies with local health, safety, and environmental regulations.</Text>
    </Container>
  )
}
