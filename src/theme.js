import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    50: '#fff8eb',
    100: '#fff1d8',
    200: '#ffe0b0',
    500: '#d97706',
    600: '#b45309',
    700: '#92400e',
    800: '#78350d'
  },
  black: '#000000'
} 

const fonts = {
  heading: `'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`,
  body: `'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`,
}

const styles = {
  global: {
    body: {
      bg: '#f7fbfd',
      color: '#072531',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    },
    a: {
      color: 'brand.500',
      _hover: { textDecoration: 'underline' }
    }
  }
}

const components = {
  Button: {
    variants: {
      solid: {
        bg: 'brand.500',
        color: 'white',
        _hover: { bg: 'brand.600' }
      }
    }
  }
}

export default extendTheme({ colors, fonts, styles, components })
