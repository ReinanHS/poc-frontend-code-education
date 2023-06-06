import './style.css'
import {
    CheckBadgeIcon,
    FireIcon,
    MagnifyingGlassIcon,
    StarIcon,
    UsersIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Page() {
    const exercises = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ];


    return (
        <>
            <section
                className="bg-constellation z-10 relative flex flex-col items-center justify-center text-center text-white py-0 mt-20 mb-28">

                <div className="mt-28">
                    <div data-aos="flip-down" className="text-center max-w-screen-md mx-auto aos-init aos-animate">
                        <h1 className="text-3xl font-bold mb-4">
                            Descubra os melhores <span className="text-green-500">exercícios</span>
                        </h1>
                        <p className="text-white">
                            Explore uma ampla variedade de exercícios desenvolvidos pela comunidade para ajudá-lo a
                            aprender uma nova linguagem de programação.
                            Encontre uma diversidade de desafios práticos, que abrangem desde conceitos básicos até
                            tópicos avançados, permitindo que você aprimore suas habilidades de programação.
                        </p>

                        <div
                            className="mb-8 px-6 py-3 border border-gray-200 border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center mt-4">
                            <button className="focus:outline-none">
                                <MagnifyingGlassIcon className={'w-5 h-5 fill-white'}/>
                            </button>
                            <input type="search" className="w-full bg-transparent text-base focus:outline-none"
                                   placeholder="Buscar exercício"/>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                         className="grid grid-cols-2 gap-2 w-full">


                        {
                            exercises.map((item, index) => {
                                return (
                                    <div className="flex flex-col" key={index}>
                                        <div
                                            className="bg-gray-900 border border-gray-900 shadow-lg  rounded-3xl p-4 m-4">
                                            <div className="flex-none sm:flex">
                                                <div className=" relative h-32 w-32 sm:mb-0 mb-3">
                                                    <Image
                                                        src="https://img.freepik.com/fotos-gratis/close-up-de-jovem-caucasiano-em-estudio_155003-19012.jpg?w=740&t=st=1686009912~exp=1686010512~hmac=7c37e36da5a612d2c0c47f046d46177a1edb63ee0c723a18bc347d85f72960b7"
                                                        alt="aji" className="w-32 h-32 object-cover rounded-2xl"/>
                                                    <a className="absolute -right-2 bottom-2 -ml-3 text-white p-1 text-xs bg-green-500 hover:bg-green-600 font-medium tracking-wider rounded-full transition ease-in duration-300"
                                                       target="_blank">
                                                        <CheckBadgeIcon className={'h-4 w-4 fill-white'}/>
                                                    </a>
                                                    <div className="flex-auto text-gray-400">
                                                        <a href={'#'} className="text-sm pt-2 hover:text-gray-300">Reinan
                                                            Souza</a>
                                                    </div>
                                                </div>
                                                <div className="flex-auto sm:ml-5 justify-evenly">
                                                    <div className="flex items-center justify-between sm:mt-2">
                                                        <div className="flex items-center">
                                                            <div className="flex flex-col">
                                                                <div
                                                                    className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                                                                    Introdução ao PHP
                                                                </div>
                                                                <div className="flex-auto text-gray-400 my-2">
                                                                    <span className="mr-3 ">Desenvolvimento WEB</span>
                                                                    <span
                                                                        className="mr-3 border-r border-gray-600 max-h-0"></span>
                                                                    <span className="mr-3">Nível básico</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex flex-col items-baseline text-gray-400 w-96 py-3">
                                                        <p className={'text-justify'}>
                                                            Go é uma linguagem de programação criada pela Google e
                                                            lançada em código livre em novembro de 2009.
                                                            Pra lá , depois divoltis porris, paradis. Paisis, filhis,
                                                            espiritis santis. Mé faiz elementum girarzis, nisi eros
                                                            vermeio, in elementis mé pra quem é amistosis quis leo.
                                                            Manduma pindureta quium dia nois paga. Sapien in monti
                                                            palavris qui num significa nadis i pareci latim.
                                                            Interessantiss quisso pudia ce receita de bolis.
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center flex-row">
                                                        <div className="flex">
                                                            <StarIcon className={'h-5 w-5 text-yellow-400'}/>
                                                            <StarIcon className={'h-5 w-5 text-yellow-400'}/>
                                                            <StarIcon className={'h-5 w-5 text-yellow-400'}/>
                                                            <StarIcon className={'h-5 w-5 text-yellow-400'}/>
                                                            <StarIcon className={'h-5 w-5 text-yellow-400'}/>
                                                        </div>
                                                    </div>
                                                    <div className="flex pt-2 text-sm text-gray-400">
                                                        <div className="flex-1 inline-flex items-center">
                                                            <UsersIcon className={'h-5 w-5 mr-2'}/>
                                                            <p className="">1.2k alunos</p>
                                                        </div>
                                                        <div className="flex-1 inline-flex items-center">
                                                            <FireIcon className={'h-5 w-5 mr-2'}/>
                                                            <p className="">14 Exercícios</p>
                                                        </div>
                                                    </div>
                                                    <div className={'flex mt-4 justify-center'}>
                                                        <button
                                                            className="lg:mx-0 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-full py-2 px-5 btn-zoom">Iniciar
                                                            estudos
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>


            </section>
        </>
    )
}