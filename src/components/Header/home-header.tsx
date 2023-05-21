'use client';

import Image from "next/image";
import {Bars4Icon, XMarkIcon} from "@heroicons/react/24/solid";
import {useState} from 'react';
import {motion} from "framer-motion";

export default function HomeHeader() {

    const [isMenuOpen, setMenuOpen] = useState(true);
    const onClickMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    const menuVariants = {
        open: {
            opacity: 1,
            height: 'auto',
            x: 0,
        },
        closed: {
            opacity: 0,
            height: 0,
            x: '-100%',
        },
    }

    return (
        <header className={'flex flex-col max-w-screen-xl mx-auto px-5 lg:flex-row md:items-center md:justify-between'}>
            <div className={'flex flex-row items-center justify-between py-6'}>
                <div className={'md:mt-8'}>
                    <a href={'#'}>
                        <Image src={'/logo-educacode.svg'} alt={'Logo do EducaCode'} width={153} height={36}/>
                    </a>
                </div>
                <button className={'rounded-lg md:hidden focus:outline-none focus:shadow-outline hover:opacity-80'}
                        onClick={onClickMenu}>
                    {isMenuOpen ? <Bars4Icon className={'w-6 h-6'}/> : <XMarkIcon className={'w-6 h-6'}/>}
                </button>
            </div>
            <motion.div animate={isMenuOpen ? 'open' : 'closed'} variants={menuVariants}>
                <nav
                    className={`flex flex-col flex-grow md:items-center pb-4 md:pb-0 md:justify-end md:flex-row origin-top duration-300`}>
                    <a href="#"
                       className={'px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-green-600'}>
                        Home
                    </a>
                    <a href="#"
                       className={'px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-green-600'}>
                        Exercícios
                    </a>
                    <a href="#"
                       className={'px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-green-600'}>
                        Rank
                    </a>
                    <a href="#"
                       className={'px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-green-600'}>
                        Fórum
                    </a>
                    <a href="#"
                       className={'px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-green-600'}>
                        Blog
                    </a>
                    <a href="#"
                       className="px-10 py-3 mt-2 text-sm text-center bg-white hover:bg-white/80 text-gray-800 rounded-full md:mt-8 md:ml-4">
                        Doar
                    </a>
                    <a href="#"
                       className="px-10 py-3 mt-2 text-sm text-center bg-green-600 hover:bg-green-700 text-white rounded-full md:mt-8 md:ml-4">
                        Entrar
                    </a>
                </nav>
            </motion.div>
        </header>
    )
}