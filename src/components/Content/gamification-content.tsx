import Image from "next/image";

export default function GamificationContent() {
    return (
        <div
            className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                    Como funciona?
                </h2>
                <p className="mb-4">
                    Utilizamos uma abordagem única, incorporando mecanismos de gamificação para tornar o
                    processo de aprendizagem divertido, envolvente e eficaz.

                    Acreditamos que a gamificação é uma abordagem poderosa para ensinar linguagem de programação, pois combina a diversão e o desafio dos jogos com o conteúdo educacional.
                </p>
                <p className="mb-4">
                    Ao tornar a aprendizagem mais envolvente e divertida, nossa plataforma ajuda os alunos a absorverem os conceitos de programação de forma mais eficaz e a se tornarem programadores habilidosos.
                </p>
                <p>
                    Os alunos são apresentados a conceitos e práticas de programação por meio de atividades
                    lúdicas, como missões, quebra-cabeças e jogos, onde eles são incentivados a aplicar os
                    conhecimentos adquiridos.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <Image className="rounded-lg"
                       src="/content/home/gamification/student-using-cell-phone-01.png"
                       alt="office content 1"
                       width={389}
                       height={541}
                />
                <Image className="mt-4 w-full rounded-lg lg:mt-10"
                       src="/content/home/gamification/student-using-cell-phone-02.png"
                       alt="office content 2"
                       width={389}
                       height={541}
                />
            </div>
        </div>
    )
}