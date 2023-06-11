import {
    CheckBadgeIcon,
    FireIcon,
    MagnifyingGlassIcon,
    StarIcon,
    UsersIcon
} from "@heroicons/react/24/solid";
import ExerciseCard from "@/components/Exercise/exercise-card";
import {ExerciseDto} from "@/dto/exercise-dto";
import {getExercisesData} from "@/constants/mock/exercises-mock";



export default function Page() {
    const exercises : ExerciseDto[] = getExercisesData()

    return (
        <>
            <section
                className="bg-constellation z-10 relative flex flex-col items-center justify-center text-center text-white py-0 mt-20 mb-28">
                <div className="mt-28">
                    <div className="text-center max-w-screen-md mx-auto">
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
                            <input type="search"
                                   className="w-full bg-transparent text-base focus:outline-none"
                                   placeholder="Buscar exercício"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-2 w-full">
                        { exercises.map((exercise) => ExerciseCard(exercise))}
                    </div>
                </div>
            </section>
        </>
    )
}