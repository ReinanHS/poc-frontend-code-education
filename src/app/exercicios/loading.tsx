import {CheckBadgeIcon, FireIcon, MagnifyingGlassIcon, StarIcon, UsersIcon} from "@heroicons/react/24/solid";

export default function Loading() {
    const overlayAnimation: string = `
        isolate 
        overflow-hidden 
        relative 
        before:absolute 
        before:inset-0 
        before:-translate-x-full
        before:animate-[shimmer_2s_infinite] 
        before:bg-gradient-to-r 
        before:from-transparent 
        before:via-rose-100/10 
        before:to-transparent
    `.replace(/\s+/g, ' ');


    return (
        <>
            <section
                className="z-10 relative flex flex-col items-center justify-center text-center text-white py-0 mt-20 mb-28">

                <div className="mt-28">
                    <div data-aos="flip-down" className="text-center max-w-screen-md mx-auto">
                        <div className={'w-full flex justify-center'}>
                            <div className={'h-8 w-4/5 mb-4 rounded-lg bg-rose-100/10' + overlayAnimation}></div>
                        </div>

                        <div className={'h-20 w-full rounded-lg bg-rose-100/20' + overlayAnimation}></div>

                        <div
                            className={'mb-8 h-12 px-6 py-3 shadow-lg w-full space-x-6 rounded-lg bg-rose-100/10 mt-4' + overlayAnimation}>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                        {
                            Array(4).fill(0).map((item, index) => {
                                return (
                                    <div className="flex flex-col" key={index}>
                                        <div
                                            className={'rounded-lg bg-rose-100/10 border border-rose-100/10 shadow-lg p-4 m-4' + overlayAnimation}>
                                            <div className="flex flex-col items-center md:items-start md:flex-row">
                                                <div className="relative h-full w-32 mb-3">
                                                    <div className={'w-32 h-32 rounded-lg bg-rose-100/20'}></div>
                                                    <div className={'w-full h-4 mt-2 rounded-lg bg-rose-100/10'}></div>
                                                </div>
                                                <div className="flex-auto sm:ml-5 justify-evenly">
                                                    <div className="flex items-center justify-between sm:mt-2">
                                                        <div className="flex items-center">
                                                            <div className="flex flex-col w-64">
                                                                <div
                                                                    className={'w-full flex-none h-6 rounded-lg bg-rose-100/10'}></div>
                                                                <div
                                                                    className={'mt-3 w-1/2 h-4 rounded-lg bg-rose-100/20'}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="my-3 w-full py-3 h-48 rounded-lg bg-rose-100/10"></div>
                                                    <div className="flex items-center flex-row">
                                                        <div className="flex">
                                                            <div className={'h-5 w-5 rounded-lg bg-rose-100/20 mx-1'}/>
                                                            <div className={'h-5 w-5 rounded-lg bg-rose-100/20 mx-1'}/>
                                                            <div className={'h-5 w-5 rounded-lg bg-rose-100/20 mx-1'}/>
                                                            <div className={'h-5 w-5 rounded-lg bg-rose-100/20 mx-1'}/>
                                                            <div className={'h-5 w-5 rounded-lg bg-rose-100/20 mx-1'}/>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="flex flex-col md:flex-row pt-2 text-sm text-gray-400">
                                                        <div className="flex-1 inline-flex items-center my-1">
                                                            <div className={'h-5 w-5 mr-2 rounded-lg bg-rose-100/10'}/>
                                                            <div className={'h-5 w-28 rounded-lg bg-rose-100/10'}/>
                                                        </div>
                                                        <div className="flex-1 inline-flex items-center my-1">
                                                            <div className={'h-5 w-5 mr-2 rounded-lg bg-rose-100/10'}/>
                                                            <div className={'h-5 w-28 rounded-lg bg-rose-100/10'}/>
                                                        </div>
                                                    </div>
                                                    <div className={'flex mt-4 justify-center'}>
                                                        <div
                                                            className="h-6 w-full md:w-32 lg:mx-0 rounded-lg bg-rose-100/10 py-2 px-5 btn-zoom"></div>
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