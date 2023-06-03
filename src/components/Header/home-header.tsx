'use client';

import Image from "next/image";
import {Bars4Icon, XMarkIcon} from "@heroicons/react/24/solid";
import {useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import MenuItemList from "@/constants/menu-itens";

interface HeaderProps {
    isMenuAbsolute: boolean;
}

export default function HomeHeader({isMenuAbsolute}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [isMenuOpen, setMenuOpen] = useState(true);
    const [currentWidth] = useState(0);
    const widthRef = useRef<number>(currentWidth);

    const onClickMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    const setWindowDimensions = () => {
        if (window.innerWidth >= 1024) {
            setMenuOpen(true)
        }

        if (window.innerWidth <= 1024 && widthRef.current >= 1024) {
            setMenuOpen(false)
        }

        widthRef.current = window.innerWidth;
    }

    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [])

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
        <section className={'w-full z-20 ' + (isMenuAbsolute ? 'lg:absolute' : '')}>
            <header
                className={'flex flex-col max-w-screen-xl mx-auto px-5 lg:flex-row lg:items-center lg:justify-between'}>
                <div className={'flex flex-row items-center justify-between py-6'}>
                    <div className={'md:mt-8'}>
                        <a href={'#'}>
                            <Image src={'/logo-educacode.svg'} alt={'Logo do EducaCode'} width={153} height={36}/>
                        </a>
                    </div>
                    <button className={'rounded-lg lg:hidden focus:outline-none focus:shadow-outline hover:opacity-80'}
                            onClick={onClickMenu}>
                        {!isMenuOpen ? <Bars4Icon className={'w-6 h-6'}/> : <XMarkIcon className={'w-6 h-6'}/>}
                    </button>
                </div>
                <motion.div animate={isMenuOpen ? 'open' : 'closed'} variants={menuVariants}>
                    <nav
                        className={`flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300`}>
                        {
                            MenuItemList().map((item, index) => {
                                return (
                                    <a href={item.link}
                                       key={index}
                                       className={'px-4 py-2 mt-2 text-sm bg-transparent rounded-lg lg:mt-8 lg:ml-4 hover:text-green-600'}>
                                        {item.name}
                                    </a>
                                )
                            })
                        }
                        <a href="#"
                           className="px-10 py-3 mt-2 text-sm text-center bg-white hover:bg-white/80 text-gray-800 rounded-full lg:mt-8 lg:ml-4">
                            Doar
                        </a>
                        <a href="#"
                           className="px-10 py-3 mt-2 text-sm text-center bg-green-600 hover:bg-green-700 text-white rounded-full lg:mt-8 lg:ml-4">
                            Entrar
                        </a>
                    </nav>
                </motion.div>
            </header>
        </section>
    )
}

export const getServerSideProps: GetServerSideProps<HeaderProps> = async () => {
    const isMenuAbsolute: boolean = true;

    return {
        props: {
            isMenuAbsolute
        }
    };
};