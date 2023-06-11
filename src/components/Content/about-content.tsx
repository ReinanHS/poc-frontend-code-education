import Link from "next/link";
import Image from "next/image";

export default function AboutContent() {
    return (
        <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 mt-7">
            <div className="relative md:w-5/12">
                <Image src="/content/home/about/foto-de-um-professor-01.png"
                       alt="foto de um professor"
                       className="rounded-2xl"
                       width={600}
                       height={400}
                />
                <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1
                            className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                            Para professores
                        </h1>
                        <Link
                            href={'/exercicios'}
                            className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium btn-zoom">
                            Criar exercícios
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative md:w-5/12">
                <Image src="/content/home/about/foto-de-alunos-02.png"
                       alt="foto de um aluno"
                       className="rounded-2xl"
                       width={600}
                       height={400}
                />
                <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h1
                            className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                            Para alunos
                        </h1>
                        <Link
                            href={'/exercicios'}
                            className="lg:mx-0 bg-green-600 hover:bg-green-700 text-xs lg:text-md px-6 py-3 font-bold rounded-full btn-zoom">
                            Resolver exercícios
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}