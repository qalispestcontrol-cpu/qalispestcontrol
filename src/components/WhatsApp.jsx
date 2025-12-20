import React, { useState } from 'react'
import { Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Textarea, Button, useDisclosure, VStack, Text, Tooltip } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

export default function WhatsApp(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [message, setMessage] = useState("Hi Qalis Pest Control 👋 I'm interested in a quote for pest control. Could you help me?")
  const phone = '27785082383' // South Africa: remove leading 0 and add country code

  function send(){
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  // small inline WhatsApp icon that inherits color
  const WhatsAppIcon = (props) => (
    <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12.04 0C5.397 0 .06 5.337.06 11.987c0 2.124.556 4.176 1.61 5.998L0 24l6.63-1.744a12.043 12.043 0 0 0 5.41 1.402c6.64 0 12.04-5.338 12.04-11.987C23.08 5.338 17.68 0 12.04 0zm6.33 16.39c-.32.876-1.83 1.67-2.53 1.75-.64.07-1.27.1-2.18-.45-2.13-1.03-3.52-3.23-3.65-3.38-.13-.15-1.03-1.28-1.03-2.46 0-1.18.6-1.71.9-1.98.26-.24.6-.3.9-.3.2 0 .44.005.67.01.23.006.52-.08.82.56.31.64.99 1.89 1.07 2.03.07.13.11.28.03.45-.08.16-.12.24-.24.38-.12.14-.25.3-.36.41-.11.11-.22.24-.1.48.1.21.44.84 1.02 1.35.7.62 1.27.82 1.64 1.05.37.24.6.21.83.16.23-.05.73-.27.88-.6.15-.33.15-.59.1-.67-.05-.08-.18-.12-.4-.21z"/>
    </svg>
  )

  return (
    <>
      <Box position="fixed" right={{ base: 3, md: 6 }} bottom={{ base: 3, md: 6 }} zIndex={999}>
        <Box pos="relative" w={{ base: 14, md: 16 }} h={{ base: 14, md: 16 }}>
          <Box className="whatsapp-pulse" />
          <Tooltip label="Message us on WhatsApp" placement="left" hasArrow>
            <IconButton
              aria-label="Chat on WhatsApp"
              icon={<WhatsAppIcon />}
              borderRadius="full"
              w="100%"
              h="100%"
              bg="#25D366"
              color="white"
              boxShadow="0 10px 30px rgba(0,0,0,0.20)"
              _hover={{ transform: 'translateY(-3px) scale(1.05)', boxShadow: '0 18px 40px rgba(37,211,102,0.22)' }}
              _focus={{ boxShadow: '0 0 0 6px rgba(37,211,102,0.12)' }}
              onClick={onOpen}
            />
          </Tooltip>
        </Box>
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={{ base: 'full', md: 'sm' }}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Message Qalis on WhatsApp</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Text>Hello! 👋 Please tell us how we can help. Edit the message before sending if you like.</Text>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} />
              <Button bg="#25D366" color="white" leftIcon={<WhatsAppIcon />} onClick={send} _hover={{ bg: '#1da851' }} _focus={{ boxShadow: '0 0 0 6px rgba(37,211,102,0.12)' }}>Send via WhatsApp</Button>
              <Button onClick={() => {
                // quick call option
                window.location.href = 'tel:0785082383'
              }} bg="#25D366" color="white" leftIcon={<PhoneIcon />} _hover={{ bg: '#1da851', color: 'white' }} _focus={{ boxShadow: '0 0 0 6px rgba(37,211,102,0.12)' }} transition="all .12s">Or call us: 078 508 2383</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}