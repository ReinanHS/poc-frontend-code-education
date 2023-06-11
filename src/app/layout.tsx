import '../style/globals.css'
import {Inter} from 'next/font/google'
import HomeHeader from "@/components/Header/home-header";
import NextTopLoader from 'nextjs-toploader';
import Footer from "@/components/Footer/footer";
import GithubCorners from "@/components/Corners/github-corners";

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
        <NextTopLoader color="#22c55e" />
        <div className={'flex flex-col'}>
            <GithubCorners/>
            <HomeHeader isMenuAbsolute={true}></HomeHeader>
            {children}
            <Footer></Footer>
        </div>
        </body>
        </html>
    )
}