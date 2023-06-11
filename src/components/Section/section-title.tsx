interface SectionTitleProps {
    align: string,
    title: string,
    preTitle: string,
    summary: string,
    children: any,
}

export default function SectionTitle(props : SectionTitleProps) {
    return (
        <section className={'bg-[#010202] w-full flex flex-col'}>
            <div
                className={`container p-8 mx-auto xl:px-0 items-center justify-center text-center flex w-full flex-col mt-4 ${
                    props.align === "left" ? "" : "items-center justify-center text-center"
                }`}>
                {props.preTitle && (
                    <div className="text-sm font-bold tracking-wider text-green-500 uppercase">
                        {props.preTitle}
                    </div>
                )}

                {props.title && (
                    <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                        {props.title}
                    </h2>
                )}

                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
                    {props.summary}
                </p>
            </div>
            {props.children}
        </section>
    );
}