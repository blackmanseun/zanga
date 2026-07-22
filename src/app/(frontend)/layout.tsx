import React from 'react'
import { Lora } from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../globals.css'

const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lora.variable}>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
