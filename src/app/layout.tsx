import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { AppContextProvider } from '@/context/AppContext'

const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ByteBreach',
  description: 'Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AppContextProvider>
      <body className={dm_sans.className}>{children}</body>
      </AppContextProvider>
    </html>
  )
}
