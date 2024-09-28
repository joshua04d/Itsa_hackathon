import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

const RootProviders = ({children}: {children: ReactNode} ) => {
  return (
    <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        
    />
  )
}

export default RootProviders