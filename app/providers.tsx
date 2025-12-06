'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from './components/ThemeProvider'
import { ReactNode } from 'react'

type ProvidersProps = {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ChakraProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ChakraProvider>
  )
}
