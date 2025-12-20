import React from 'react'
import { Box, Flex, Link, Image, Button, Heading, Stack, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack, useDisclosure, HStack } from '@chakra-ui/react' 
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { HamburgerIcon, PhoneIcon } from '@chakra-ui/icons'

export default function Header(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <Box as="header" bg="#000000" borderBottomWidth={1} borderColor="rgba(255,255,255,0.06)" position="sticky" top={0} zIndex="sticky" backdropFilter="saturate(120%) blur(6px)">
      <Flex className="container" maxW="1100px" mx="auto" align="center" justify="space-between" h="64px" px={0}>
        <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center" height="100%">
          <Image src="/assets/Logo.jpeg" alt="Qalis Pest Control" height="100%" objectFit="contain" />
        </Link>

        {/* Desktop nav */}
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }} align="center">
          {navLinks.map((l) => {
            const isActive = location.pathname === l.to
            return (
              <Link
                as={RouterLink}
                to={l.to}
                key={l.to}
                px={0}
                py={1}
                fontWeight={600}
                color={isActive ? 'brand.600' : 'white'}
                borderBottom={isActive ? '3px solid' : '3px solid transparent'}
                borderColor={isActive ? 'brand.500' : 'transparent'}
                _hover={{ color: 'brand.500', textDecoration: 'none' }}
                aria-current={isActive ? 'page' : undefined}
              >
                {l.label}
              </Link>
            )
          })}
        </HStack>

        <HStack spacing={3}>
          <IconButton aria-label="Call us" icon={<PhoneIcon />} display={{ base: 'inline-flex', md: 'none' }} onClick={() => window.location.href = 'tel:0785082383'} bg="brand.500" color="white" borderRadius="full" boxShadow="sm" _hover={{ bg: 'brand.600' }} size="sm" mr={2} />
          <IconButton aria-label="Open menu" icon={<HamburgerIcon />} display={{ base: 'inline-flex', md: 'none' }} onClick={onOpen} variant="ghost" color="white" _hover={{ bg: 'rgba(255,255,255,0.04)' }} zIndex={2002} />
          <Button as={RouterLink} to="/quote" colorScheme="brand" size="sm" display={{ base: 'none', md: 'inline-flex' }}>Get a Quote</Button>
        </HStack>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="#000" color="white">
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <VStack spacing={6} align="stretch" mt={8}>
              <Link as={RouterLink} to="/" onClick={onClose} display="flex" alignItems="stretch" height="64px"><Image src="/assets/Logo.jpeg" alt="Qalis Pest Control" height="100%" objectFit="contain" /></Link>
              {navLinks.map((l) => (
                <Button as={RouterLink} to={l.to} key={l.to} variant="ghost" justifyContent="flex-start" onClick={onClose} color="white" _hover={{ color: 'brand.500', bg: 'rgba(217,119,6,0.06)' }} transition="all .15s">{l.label}</Button>
              ))}

              <Box pt={4}>
                <Button as={RouterLink} to="/quote" colorScheme="brand" width="100%" onClick={onClose}>Get a Quote</Button>
                <Button mt={3} width="100%" onClick={() => window.location.href = 'tel:0785082383'} bg="brand.500" color="white" _hover={{ bg: 'brand.600' }} _focus={{ boxShadow: '0 0 0 6px rgba(217,119,6,0.12)' }} transition="all .12s">Call: 078 508 2383</Button>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
} 
