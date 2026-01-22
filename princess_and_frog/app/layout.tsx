import './globals.css'
import { Playfair_Display } from 'next/font/google'
import { ReactNode } from 'react'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={playfair.className}>
        {children}
      </body>
    </html>
  )
}
