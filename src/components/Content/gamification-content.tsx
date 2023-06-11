import Image from "next/image";

export default function GamificationContent() {
    return (
        <div
            className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
                    Gamificação na educação
                </h2>
                <p className="mb-4">
                    Nossa plataforma inovadora de ensino de linguagem de programação é projetada especificamente
                    para alunos que estão cursando cursos de graduação com disciplinas introdutórias de
                    programação.
                    Utilizamos uma abordagem única, incorporando mecanismos de gamificação para tornar o
                    processo de aprendizagem divertido, envolvente e eficaz.
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