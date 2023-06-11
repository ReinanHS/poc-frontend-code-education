import {FireIcon, StarIcon, UsersIcon} from "@heroicons/react/24/solid";
import {ExerciseDto} from "@/dto/exercise-dto";

export default function ExerciseCard(exercise: ExerciseDto) {
    return (
        <div className="flex flex-col" key={exercise.id}>
            <div
                className="bg-gray-900 border border-gray-900 shadow-lg  rounded-3xl p-4 m-4">
                <div className="flex flex-col items-center">
                    <div className="w-full h-64 bg-top bg-cover rounded-t"
                         style={{backgroundImage: `url(${exercise.image})`, backgroundPosition: 'center'}}>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <div className="flex flex-col">
                                <div
                                    className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                                    {exercise.blurb}
                                </div>
                                <div className="flex-auto text-gray-400 my-2">
                                    <span className="mr-3 ">{exercise.subtitle}</span>
                                    <span
                                        className="mr-3 border-r border-gray-600 max-h-0"></span>
                                    <span className="mr-3">{exercise.language}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-baseline text-gray-400 py-3 w-full">
                        <p className={'text-justify'}>{exercise.summary}</p>
                    </div>
                    <div className="flex items-baseline w-full">
                        {getStarRate(exercise.rate)}
                    </div>
                    <div className="flex items-center flex-row pt-2 text-sm text-gray-400 w-full">
                        <div className="flex-1 inline-flex items-center">
                            <UsersIcon className={'h-5 w-5 mr-2'}/>
                            <p className="">{exercise.count_students} alunos</p>
                        </div>
                        <div className="flex-1 inline-flex items-center">
                            <FireIcon className={'h-5 w-5 mr-2'}/>
                            <p className="">{exercise.count_exercises} Exercícios</p>
                        </div>
                    </div>
                    <div className={'flex mt-4 justify-center w-1/2'}>
                        <button
                            className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-full py-2 px-5 btn-zoom w-full">
                            Iniciar estudos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getStarRate(rate: number) {
    const rows = [];
    for (let i = 0; i < rate; i++) {
        rows.push(
            <StarIcon className={'h-5 w-5 text-yellow-400'} key={i}/>
        );
    }

    const localRate = Math.ceil(5 - rate);
    if (localRate >= 1) {
        for (let i = 0; i < localRate; i++) {
            rows.push(
                <StarIcon className={'h-5 w-5 text-gray-400'} key={i}/>
            );
        }
    }

    return rows;
}