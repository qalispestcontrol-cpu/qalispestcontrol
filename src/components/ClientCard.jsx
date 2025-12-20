import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function ClientCard({ name, contactPerson, phone, altPhone, services, since, work }){
  return (
    <Box p={4} borderRadius="md" bg="white" boxShadow="sm">
      <Heading size="sm" mb={2}>{name}</Heading>
      <Text fontSize="sm" color="gray.600">Contact: <strong>{contactPerson}</strong> · {phone}{altPhone ? ` / ${altPhone}` : ''}</Text>
      <Text fontSize="sm" mt={2}><strong>Services:</strong> {services}</Text>
      {work && <Text fontSize="sm" mt={2} color="gray.700"><strong>Work performed:</strong> {work}</Text>}
      <Text fontSize="xs" mt={2} color="gray.500">From: {since}</Text>
    </Box>
  )
}