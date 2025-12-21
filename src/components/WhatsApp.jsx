import React, { useState } from 'react'
import { Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Textarea, Button, useDisclosure, VStack, Text, Tooltip } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsApp(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [message, setMessage] = useState("Hi Qalis Pest Control 👋 I'm interested in a quote for pest control. Could you help me?")
  const phone = '27785082382' // South Africa: remove leading 0 and add country code

  function send(){
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }


  return (
    <>
      <Box position="fixed" right={{ base: 3, md: 6 }} bottom={{ base: 3, md: 6 }} zIndex={999}>
        <Box pos="relative" w={{ base: 14, md: 16 }} h={{ base: 14, md: 16 }}>
          <Box className="whatsapp-pulse" />
          <Tooltip label="Message us on WhatsApp" placement="left" hasArrow>
            <IconButton
              aria-label="Chat on WhatsApp"
              icon={<FaWhatsapp size={22} />}
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
              <Button bg="#25D366" color="white" leftIcon={<FaWhatsapp />} onClick={send} _hover={{ bg: '#1da851' }} _focus={{ boxShadow: '0 0 0 6px rgba(37,211,102,0.12)' }}>Send via WhatsApp</Button>
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