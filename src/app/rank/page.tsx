import Image from "next/image";
import {DocumentCheckIcon, FireIcon} from "@heroicons/react/24/solid";

interface UserData {
    name: string,
    photo: string,
    exercises: number,
    days: number,
    office: string,
    city: string,
    state: string,
}

function fakeUserData(): UserData[] {
    return [
        {
            "name": "Reinan Gabriel",
            "photo": "https://avatars.githubusercontent.com/u/28494067?v=4",
            "exercises": 50,
            "days": 60,
            "office": "DevOps engineer",
            "city": "Simão Dias",
            "state": "SE"
        },
        {
            "name": "Maria Silva",
            "photo": "https://picsum.photos/id/237/200/300",
            "exercises": 30,
            "days": 45,
            "office": "Software Developer",
            "city": "São Paulo",
            "state": "SP"
        },
        {
            "name": "João Pereira",
            "photo": "https://picsum.photos/id/237/200/300",
            "exercises": 20,
            "days": 30,
            "office": "UI/UX Designer",
            "city": "Rio de Janeiro",
            "state": "RJ"
        },
        {
            "name": "Ana Costa",
            "photo": "https://picsum.photos/id/237/200/300",
            "exercises": 40,
            "days": 55,
            "office": "Data Analyst",
            "city": "Belo Horizonte",
            "state": "MG"
        },
        {
            "name": "Ricardo Santos",
            "photo": "https://picsum.photos/id/237/200/300",
            "exercises": 10,
            "days": 20,
            "office": "Product Manager",
            "city": "Porto Alegre",
            "state": "RS"
        },
        {
            "name": "Juliana Lima",
            "photo": "https://picsum.photos/id/237/200/300",
            "exercises": 35,
            "days": 50,
            "office": "Marketing Specialist",
            "city": "Salvador",
            "state": "BA"
        },
        {
            "name": "Pedro Carvalho",
            "photo": "https://picsum.photos/id/237/200/300",
            "exercises": 25,
            "days": 35,
            "office": "Project Manager",
            "city": "Curitiba",
            "state": "PR"
        },
        {
            "name": "Carolina Oliveira",
            "photo": "https://picsum.photos/id/237/200/300",
            "exercises": 15,
            "days": 25,
            "office": "Business Analyst",
            "city": "Fortaleza",
            "state": "CE"
        },
        {
            "name": "Lucas Rodrigues",
            "photo": "https://picsum.photos/id/237/200/300",
            "exercises": 55,
            "days": 70,
            "office": "Full Stack Developer",
            "city": "Manaus",
            "state": "AM"
        },
        {
            "name": "Isabella Almeida",
            "photo": "https://picsum.photos/id/237/200/300",
            "exercises": 48,
            "days": 63,
            "office": "Software Engineer",
            "city": "Recife",
            "state": "PE"
        }
    ];
}

export default function Page() {
    return (
        <>
            <section className="lg:py-48 py-28 w-full bg-constellation">
                <div className="container mx-auto text-left text-white px-5">
                    <div className="flex items-center lg:flex-row flex-col-reverse">
                        <div className="lg:w-1/2 w-full flex flex-col justify-center items-center">
                            <div>
                                <h1 className="text-5xl font-medium mb-6 text-center">Ranking</h1>
                                <p className="text-xl mb-12">
                                    Aqui estão algumas informações valiosas sobre os alunos.
                                    Nesta página, você encontrará uma variedade de dados sobre as linguagens de programação
                                    que os alunos estão mais interessados em aprender.
                                </p>
                            </div>
                            <div>
                                <button
                                    className="bg-green-600 text-white py-4 px-12 rounded-full hover:bg-green-500">Visualizar
                                    informações
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2 pl-16">
                            <Image className={'object-cover'} src={'/content/rank.png'} alt={'Rank'} width={500}
                                   height={500}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 w-full bg-green-600">
                <div className="container mx-auto text-left text-white mt-4 px-5">
                    <div className="text-center">
                        <h1 className="text-5xl font-medium mb-6">Ranking dos Alunos</h1>
                        <p className="text-xl mb-12 text-left">
                            Confira abaixo o ranking atualizado dos alunos com as pontuações mais altas na nossa plataforma durante este mês.
                            Esses alunos demonstraram um excelente desempenho e dedicação ao utilizar nossa plataforma.
                            Suas pontuações destacam-se entre milhares de estudantes, mostrando sua habilidade em assimilar e aplicar o conhecimento.
                        </p>
                    </div>
                    <div className={'grid grid-cols-1 lg:grid-cols-2 gap-2 w-full'}>
                        {
                            fakeUserData().map((item, index) => {
                                return UserCard(item, index + 1)
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export function UserCard(userData: UserData, index: number) {
    return (
        <div className="flex flex-col" key={index}>
            <div className="bg-gray-900 border border-gray-900 shadow-lg  rounded-3xl p-4 m-4">
                <div className="flex flex-col sm:flex-row justify-center">
                    <div className={'w-full sm:w-auto flex justify-center'}>
                        <div className="relative h-32 w-32 sm:mb-0 mb-3">
                            <img
                                src={userData.photo}
                                alt="Foto de perfil" className="w-32 h-32 object-cover rounded-2xl"/>
                            <button
                                className="absolute -right-2 bottom-2 -ml-3 text-white p-1 text-lg bg-green-600 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                { index < 10 ? `0${index}` : index}
                            </button>
                        </div>
                    </div>
                    <div className="flex-auto sm:ml-5 justify-evenly">
                        <div className="flex items-center justify-between sm:mt-2">
                            <div className="flex items-center">
                                <div className="flex flex-col">
                                    <div
                                        className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                                        {userData.name}
                                    </div>
                                    <div className="flex-auto text-gray-400 my-1">
                                        <span className="mr-3 ">{userData.office}</span>
                                        <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                                        <span>{userData.city}, {userData.state}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex pt-2 text-sm text-gray-400">
                            <div className="flex-1 inline-flex items-center">
                                <DocumentCheckIcon className={'h-5 w-5 mr-2'}/>
                                <p>{userData.exercises} exercícios</p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                                <FireIcon className={'h-5 w-5 mr-2'}/>
                                <p className="">{userData.days} dias</p>
                            </div>
                            <button
                                className="hidden sm:inline bg-green-600 text-white px-5 ml-4 py-2 rounded-full hover:bg-green-500">
                                Perfil
                            </button>
                        </div>
                        <div className="flex pt-2 text-sm text-gray-400 sm:hidden">
                            <button
                                className="bg-green-600 text-white px-5 ml-4 py-2 rounded-full hover:bg-green-500 w-full">
                                Perfil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}