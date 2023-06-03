import '../style/globals.css'
import {Inter} from 'next/font/google'
import HomeHeader from "@/components/Header/home-header";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'EducaCoding - A melhor maneira de aprender uma linguagem de programação',
    description: 'EducaCoding é um site que oferece cursos online de diversas linguagens de programação, desde o básico até o avançado.',
}

export default function RootLayout({children}: {
    children: React.ReactNode,
}) {
    return (
        <html lang="pt">
        <body className={inter.className}>
        <div className={'flex flex-col'}>
            <HomeHeader isMenuAbsolute={true}></HomeHeader>
            {children}
        </div>
        </body>
        </html>
    )
}