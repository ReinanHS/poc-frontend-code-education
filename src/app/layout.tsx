import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EducaCode - A melhor maneira de aprender uma linguagem de programação',
  description: 'EducaCode é um site que oferece cursos online de diversas linguagens de programação, desde o básico até o avançado.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
