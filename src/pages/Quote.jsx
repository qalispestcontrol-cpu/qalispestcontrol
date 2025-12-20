import React, { useState } from 'react'
import { Container, Box, Heading, Text, FormControl, FormLabel, Input, Select, Textarea, Button, Stack, useToast } from '@chakra-ui/react'
import Breadcrumbs from '../components/Breadcrumbs'

export default function Quote(){
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', address: '', date: '', message: '' })

  function update(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.phone || !form.service){
      toast({ title: 'Please complete required fields', status: 'error', duration: 4000, isClosable: true })
      return
    }
    setLoading(true)
    // Simulate send
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    toast({ title: 'Quote request sent', description: 'We will contact you shortly to confirm details.', status: 'success', duration: 5000, isClosable: true })
    setForm({ name: '', email: '', phone: '', service: '', address: '', date: '', message: '' })
  }

  return (
    <Container maxW="780px">
      <Breadcrumbs />
      <Box bgGradient="linear(to-r, brand.50, brand.100)" p={{ base: 6, md: 8 }} borderRadius="md" textAlign="center" mb={6}>
        <Heading>Get a Free Quote</Heading>
        <Text mt={2} color="gray.600">Tell us about your pest problem and we’ll get back with a free, no-obligation quote.</Text>
      </Box>

      <Box as="form" bg="white" p={6} borderRadius="md" boxShadow="sm" onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" value={form.name} onChange={update} placeholder="Full name" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Phone</FormLabel>
            <Input name="phone" value={form.phone} onChange={update} placeholder="078 508 2383" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Service Required</FormLabel>
            <Select name="service" value={form.service} onChange={update} placeholder="Select a service">
              <option>General Pest Control</option>
              <option>Rodent Control</option>
              <option>Termite Inspection & Treatment</option>
              <option>Fumigation Services</option>
              <option>Disinfection & Sanitization</option>
              <option>Bird Proofing</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input name="address" value={form.address} onChange={update} placeholder="Property address" />
          </FormControl>

          <FormControl>
            <FormLabel>Preferred Date</FormLabel>
            <Input type="date" name="date" value={form.date} onChange={update} />
          </FormControl>

          <FormControl>
            <FormLabel>Notes</FormLabel>
            <Textarea name="message" value={form.message} onChange={update} placeholder="Anything else we should know?" />
          </FormControl>

          <Button type="submit" colorScheme="brand" isLoading={loading}>Request Quote</Button>
        </Stack>
      </Box>
    </Container>
  )
}