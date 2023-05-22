import HomeHeader from "@/components/Header/home-header";
import GetHomeVideo from "@/constants/page";
import {PlayIcon} from "@heroicons/react/24/solid";

export default function Home() {
    return (
        <div className={'flex flex-col h-screen'}>
            <section className={'w-full lg:absolute z-10'}>
                <HomeHeader></HomeHeader>
            </section>
            <section
                className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video className="min-w-full min-h-full absolute object-cover" src={GetHomeVideo()}
                           autoPlay muted loop></video>
                </div>
                <div className="video-content max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
                    <div
                        className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
                        <h1 data-aos="fade-right" data-aos-once="true"
                            className="my-4 text-5xl font-bold leading-tight text-darken aos-init aos-animate">
                            <span className="text-green-500">Aprenda</span> uma linguagem de programação
                        </h1>
                        <p
                            data-aos="fade-down" data-aos-once="true" data-aos-delay="300"
                            className="leading-normal text-2xl mb-8 aos-init aos-animate">
                            O nosso site oferece cursos online de diversas linguagens de programação, desde o básico até
                            o avançado.
                        </p>
                        <div data-aos="fade-up" data-aos-once="true" data-aos-delay="700"
                             className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5 aos-init aos-animate">
                            <button
                                className="lg:mx-0 bg-green-600 hover:bg-green-700 text-white text-xl font-bold rounded-full py-4 px-9 btn-zoom">
                                Iniciar estudos
                            </button>
                            <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 btn-zoom">
                                <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                                    <PlayIcon className={'w-5 h-5 fill-black'}></PlayIcon>
                                </button>
                                <span className="cursor-pointer">Veja como funciona</span></div>
                        </div>
                    </div>
                    <div className={'w-full lg:w-6/12 lg:-mt-10 relative lg:pt-24'}>
                        <svg className={'w-10/12 mx-auto 2xl:-mb-20 aos-init aos-animate'} viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="blob">
                                    <path fill="#22c55e" d="M422,310Q380,380,310,414Q240,448,167.5,416.5Q95,385,61.5,312.5Q28,240,51,157Q74,74,157,38.5Q240,3,302,59.5Q364,116,414,178Q464,240,422,310Z" />
                                </clipPath>
                            </defs>
                            <image x="0" y="0" width="100%" height="100%" clipPath="url(#blob)" href={'/content/estudante.jpg'} preserveAspectRatio="xMidYMid slice"></image>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    )
}
