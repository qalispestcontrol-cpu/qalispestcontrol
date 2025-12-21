import React from 'react'
import { Box, Container, Text, Link, Stack, SimpleGrid, Heading, HStack, Icon, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const PhoneSvg = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.05.42 2.07.88 3.02a2 2 0 0 1-.45 2.11L8.21 10.79a16 16 0 0 0 6 6l1.94-1.94a2 2 0 0 1 2.11-.45c.95.46 1.97.76 3.02.88A2 2 0 0 1 22 16.92z" fill="currentColor"/></svg>
)

const WhatsAppSvg = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.52 3.48A11.88 11.88 0 0012.02 0C5.37 0 .1 5.9.1 13.2c0 2.33.61 4.49 1.77 6.39L0 24l4.69-1.23a12.97 12.97 0 004.2.7h.12c6.65 0 11.93-5.9 11.93-13.2 0-3.5-1.37-6.75-3.92-9.03z" fill="#25D366"/><path d="M16.9 14.73c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.35.22-.66.07a9.09 9.09 0 01-2.7-1.66 10.08 10.08 0 01-1.84-2.27c-.19-.33 0-.5.14-.64.14-.13.32-.31.48-.47.16-.16.22-.27.33-.45.1-.18.05-.33-.03-.48-.08-.15-.68-1.65-.93-2.27-.24-.59-.48-.51-.67-.52l-.57-.01c-.18 0-.47.07-.72.33s-.95.93-.95 2.27c0 1.34.98 2.63 1.12 2.81.14.18 1.94 2.96 4.7 4.28 3.04 1.46 3.04 1.02 3.58.96.46-.05 1.78-.73 2.03-1.44.24-.7.24-1.3.17-1.44-.06-.15-.23-.22-.52-.36z" fill="#fff"/></svg>
)

export default function Footer(){
  return (
    <Box as="footer" bg="#000000" color="white" py={12} mt={12}>
      <Container maxW="1100px">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>

          <Box>
            <Heading size="sm" mb={3}>Qalis Pest Control</Heading>
            <Text mb={3} color="gray.300">Reliable solutions for unwanted visitors — safe, effective, and environmentally conscious pest control across residential and commercial sectors.</Text>
            <HStack spacing={3}>
              <Button as="a" href="https://wa.me/27785082382?text=Hello%20Qalis%20Pest%20Control" target="_blank" rel="noopener" colorScheme="green" leftIcon={<Icon as={WhatsAppSvg}/>}>WhatsApp</Button>
              <Button as="a" href="tel:0785082383" variant="ghost" color="white" leftIcon={<Icon as={PhoneSvg}/>} _hover={{ bg: 'brand.500', color: 'white' }} _focus={{ boxShadow: '0 0 0 6px rgba(217,119,6,0.12)' }} transition="all .12s">Call</Button>
            </HStack>
          </Box>

          <Box>
            <Heading size="sm" mb={3}>Quick Links</Heading>
            <Stack spacing={2}>
              <Link as={RouterLink} to="/" _hover={{ color: 'brand.500' }} transition="color .15s">Home</Link>
              <Link as={RouterLink} to="/about" _hover={{ color: 'brand.500' }} transition="color .15s">About</Link>
              <Link as={RouterLink} to="/services" _hover={{ color: 'brand.500' }} transition="color .15s">Services</Link>
              <Link as={RouterLink} to="/contact" _hover={{ color: 'brand.500' }} transition="color .15s">Contact</Link>
            </Stack>
          </Box>

          <Box>
            <Heading size="sm" mb={3}>Contact</Heading>
            <Stack spacing={2}>
              <Text><strong>Phone:</strong> <Link href="tel:0785082383" _hover={{ color: 'brand.500' }} transition="color .15s">078 508 2382</Link></Text>
              <Text><strong>Email:</strong> <Link href="mailto:qalis.pestcontrol@gmail.com" _hover={{ color: 'brand.500' }} transition="color .15s">Pestcontrol@gmail.com</Link></Text>
              <Text><strong>WhatsApp:</strong> <Link href="https://wa.me/27785082382?text=Hello%20Qalis%20Pest%20Control" target="_blank" rel="noopener" _hover={{ color: 'brand.500' }} transition="color .15s">Start Chat</Link></Text>
            </Stack>
          </Box>

          <Box>
            <Heading size="sm" mb={3}>Offices</Heading>
            <Stack spacing={2}>
              <Box>
                <Text fontWeight={700}>Gauteng Office</Text>
                <Text fontSize="sm">9191 Trailand Crescent, Cosmo City, Randburg, 2188</Text>
                <Link href="https://www.google.com/maps/search/?api=1&query=9191+Trailand+Crescent+Cosmo+City+Randburg" isExternal _hover={{ color: 'brand.500' }} transition="color .15s">Open in Maps</Link>
              </Box>

              <Box mt={2}>
                <Text fontWeight={700}>Free State Office</Text>
                <Text fontSize="sm">2151 Section K, Botshabelo, 9781</Text>
                <Link href="https://www.google.com/maps/search/?api=1&query=2151+Section+K+Botshabelo" isExternal _hover={{ color: 'brand.500' }} transition="color .15s">Open in Maps</Link>
              </Box>
            </Stack>
          </Box>

        </SimpleGrid>

        <Box mt={8} borderTop="1px solid" borderColor="rgba(255,255,255,0.06)" pt={6}>
          <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <Text fontSize="sm">© Qalis Pest Control (Pty) Ltd — All rights reserved.</Text>
            <Text fontSize="sm">Designed & Maintained with care · Phone: <Link href="tel:0752421770" _hover={{ color: 'brand.500' }} transition="color .15s">078 508 2382</Link></Text>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
} 
