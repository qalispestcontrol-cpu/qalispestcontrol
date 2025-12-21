import React from 'react'
import { Box, Heading, Text, Button, Stack, Container } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Hero({ image, kicker, title, description, primaryCta = { to: '/contact', label: 'Get a Free Quote' }, secondaryCta = { to: '/services', label: 'Our Services' } }){
  const bg = image ?? '/assets/images/webp-images/image-4.webp'
  return (
    <Box as="section" className="hero" position="relative" width="100vw" left="50%" transform="translateX(-50%)" mt={-10} minH={{ base: '60vh', md: '72vh' }} bgImage={`url('${bg}')`} bgSize="cover" bgPos="center" bgRepeat="no-repeat" display="flex" alignItems="center" borderRadius={0} overflow="hidden">
      {/* dark overlay for contrast */}
      <Box position="absolute" inset={0} bgGradient="linear(to-b, rgba(0,0,0,0.55), rgba(0,0,0,0.25))" />

      <Container maxW="1100px" zIndex="1" py={{ base: 6, md: 14 }}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center" justify="space-between">
          <Box flex="1" textAlign={{ base: 'center', md: 'left' }} color="white">
            <Text className="kicker" color="whiteAlpha.800">{kicker ?? 'PROFILE'}</Text>
            <Heading as="h1" size="xl">{title ?? 'RELIABLE SOLUTIONS FOR UNWANTED VISITORS'}</Heading>
            <Text mt={4} color="whiteAlpha.900">{description ?? 'Qalis Pest Control (Pty) Ltd is a trusted pest management company dedicated to delivering safe, efficient, and affordable pest control services across residential, commercial, and industrial sectors. Based in South Africa, we focus on protecting health, property, and the environment with cutting-edge pest solutions.'}</Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={3} mt={6} justify={{ base: 'center', md: 'flex-start' }}>
              <Button as={RouterLink} to={primaryCta.to} colorScheme="brand" className="btn-primary">{primaryCta.label}</Button>
              <Button as={RouterLink} to={secondaryCta.to} variant="ghost" className="btn" color="white" _hover={{ bg: 'whiteAlpha.100' }}>{secondaryCta.label}</Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}