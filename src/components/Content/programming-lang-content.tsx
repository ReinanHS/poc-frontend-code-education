'use client';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProgrammingLangContent() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 6,
            slidesToSlide: 1 // optional, default to 1.
        },
        desktop: {
            breakpoint: {max: 1024, min: 768},
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 768, min: 640},
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 640, min: 0},
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const programmingLanguage = [
        {
            name: 'Java',
            iconName: 'devicon-java-plain-wordmark',
            link: '/#java',
        },
        {
            name: 'C#',
            iconName: 'devicon-csharp-plain-wordmark',
            link: '/#csharp',
        },
        {
            name: 'HTML',
            iconName: 'devicon-html5-plain-wordmark',
            link: '/#html',
        },
        {
            name: 'Python',
            iconName: 'devicon-python-plain-wordmark',
            link: '/#python',
        },
        {
            name: 'Javascript',
            iconName: 'devicon-javascript-plain',
            link: '/#javascript',
        },
        {
            name: 'GO',
            iconName: 'devicon-go-original-wordmark',
            link: '/#go',
        },
        {
            name: 'CSS',
            iconName: 'devicon-css3-plain-wordmark',
            link: '/#css',
        },
        {
            name: 'PHP',
            iconName: 'devicon-php-plain',
            link: '/#php',
        },
        {
            name: 'Dart',
            iconName: 'devicon-dart-plain-wordmark',
            link: '/#dart',
        },
        {
            name: 'Lua',
            iconName: 'devicon-lua-plain-wordmark',
            link: '/#lua',
        },
        {
            name: 'Markdown',
            iconName: 'devicon-markdown-original',
            link: '/#markdown',
        },
        {
            name: 'C++',
            iconName: 'devicon-cplusplus-plain-wordmark',
            link: '/#cplusplus',
        }
    ]

    return (
        <div className={'bg-black h-14 w-full flex flex-col justify-center items-center'}>
            <Carousel
                className={'w-1/2'}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                arrows={false}
                autoPlaySpeed={1000 * 4}>
                {
                    programmingLanguage.map((language, index) => {
                        return (
                            <div className={'flex flex-row'} key={index}>
                                <a className={'text-4xl hover:opacity-70'} href={language.link}>
                                    <i className={language.iconName}></i>
                                </a>
                            </div>
                        );
                    })
                }
            </Carousel>
        </div>
    )
}