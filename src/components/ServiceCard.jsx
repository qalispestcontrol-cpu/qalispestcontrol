import React from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/react'

export default function ServiceCard({ img, title, desc }){
  return (
    <Box p={4} borderRadius="md" bg="white" boxShadow="sm" textAlign="left">
      <Box mb={3} borderRadius="8px" overflow="hidden" height={{ base: '140px', md: '220px' }}>
        <Image src={img} alt={title} width="100%" height="100%" objectFit="cover" loading="lazy" />
      </Box>
      <Heading size="sm" mb={2}>{title}</Heading>
      <Text color="gray.600" fontSize="sm" noOfLines={3}>{desc}</Text>
    </Box>
  )
}  