"use client";

import {useState} from "react";
import {PlayIcon} from "@heroicons/react/24/solid";

const Video = () => {
    const [playVideo, setPlayVideo] = useState(false);
    return (
        <div
            className={'container p-8 mx-auto xl:px-0 items-center justify-center text-center flex w-full flex-col mt-4 items-center justify-center text-center'}>
            <div className="w-full mx-auto overflow-hidden lg:mb-20 rounded-2xl">
                <div
                    onClick={() => setPlayVideo(!playVideo)}
                    className="w-full flex items-center justify-center aspect-video bg-rose-100/10">
                    {!playVideo && (
                        <button className="flex">
                            <PlayIcon className={'w-16 h-16 lg:w-28 lg:h-28'}></PlayIcon>
                            <span className="sr-only">Reproduzir vídeo</span>
                        </button>
                    )}
                    {playVideo && (
                        <iframe
                            className={'w-full aspect-video'}
                            src="https://www.youtube.com/embed/zuw0Fo1la2U"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Video;