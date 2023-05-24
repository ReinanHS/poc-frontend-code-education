import HomeHeader from "@/components/Header/home-header";
import ProgrammingLangContent from "@/components/Content/programming-lang-content";
import MainContent from "@/components/Content/main-content";

export default function Home() {
    return (
        <div className={'flex flex-col'}>
            <section className={'w-full lg:absolute z-20'}>
                <HomeHeader></HomeHeader>
            </section>
            <section
                className="relative flex flex-col items-center justify-center text-center text-white py-0 px-3">
                <MainContent></MainContent>
            </section>
            <section className={'bg-[#010202] h-14 w-full flex flex-col justify-center items-center'}>
                <ProgrammingLangContent></ProgrammingLangContent>
            </section>
        </div>
    )
}
