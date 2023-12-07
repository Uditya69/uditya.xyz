import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home | Uditya',
  description: 'portfolio Website of uditya',
  icons: {
    icon: 
      {
        url: '/favicon.ico',
        href: '/favicon.ico',
      },
  
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <main className='max-w-3xl mx-auto font-mono '>
        
        <Header />

          {children}
          
        <Footer />  
        
        </main>
      </body>   
    </html>
  )
}
