"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
    return (
        <div className="container mx-auto">
            <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
                {faqdata.map((item, index) => (
                    <div key={item.question} className="mb-5">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 bg-rose-100/10 text-gray-200">
                                        <span>{item.question}</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? "transform rotate-180" : ""
                                            } w-5 h-5 text-green-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
                                        {item.answer}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                ))}
            </div>
        </div>
    );
}

const faqdata = [
    {
        question: "O que é a plataforma de ensino de linguagem de programação com gamificação?",
        answer: "Nossa plataforma é uma ferramenta de ensino inovadora que utiliza elementos de jogos para tornar a aprendizagem de linguagem de programação mais envolvente e divertida.",
    },
    {
        question: "A plataforma é adequada para iniciantes em programação?",
        answer: "Sim, nossa plataforma é projetada para atender tanto a iniciantes quanto a alunos com algum conhecimento prévio de programação. Temos cursos introdutórios que abrangem os conceitos fundamentais.",
    },
    {
        question: "Os professores têm acesso a recursos adicionais na plataforma?",
        answer:
            "Sim, os professores têm acesso a recursos de gestão de turmas, ferramentas de avaliação e podem acompanhar o progresso dos alunos. Eles também podem interagir com os alunos através dos recursos de comunicação da plataforma.",
    },
    {
        question: "A plataforma é compatível com dispositivos móveis?",
        answer:
            "Sim, nossa plataforma é compatível com dispositivos móveis. Você pode acessar os cursos e recursos através de smartphones e tablets.",
    },
    {
        question: "Existe algum suporte disponível para os alunos?",
        answer:
            "Sim, oferecemos suporte para os alunos. Você pode entrar em contato conosco através do formulário de contato em nosso site ou utilizar os recursos de mensagens disponíveis na plataforma.",
    },
    {
        question: "Quais cursos são oferecidos na plataforma?",
        answer:
            "Nossa plataforma abrange uma ampla gama de cursos de linguagem de programação, desde níveis introdutórios até avançados. Temos cursos de Python, Java, C++, JavaScript, entre outros.",
    },
];

export default Faq;