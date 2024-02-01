//'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

//import AppContextProvider from "../data/context/AppContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CloudStorage',
  description: 'Cloud Storage - JavaScript Full Stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en-US">
      
        <body className={inter.className}>
      { /* <AppContextProvider> */ }
            {children}
      { /* </AppContextProvider> */ }
          
        </body>
      
    </html>

  )
}
