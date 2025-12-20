import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const labelMap = {
  '': 'Home',
  about: 'About',
  services: 'Services',
  contact: 'Contact'
}

export default function Breadcrumbs(){
  const { pathname } = useLocation()
  const parts = pathname.split('/').filter(Boolean)
  const items = [''].concat(parts)

  return (
    <Box mb={4}>
      <Breadcrumb separator="/" fontSize="sm" color="gray.500">
        {items.map((part, idx) => {
          const to = '/' + items.slice(1, idx + 1).join('/')
          const label = labelMap[part] || (part || 'Home')
          const isLast = idx === items.length - 1
          return (
            <BreadcrumbItem key={idx} isCurrentPage={isLast}>
              {isLast ? (
                <BreadcrumbLink>{label}</BreadcrumbLink>
              ) : (
                <BreadcrumbLink as={RouterLink} to={to || '/'}>{label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          )
        })}
      </Breadcrumb>
    </Box>
  )
}