import ProgrammingLangContent from "@/components/Content/programming-lang-content";
import MainContent from "@/components/Content/main-content";
import GamificationContent from "@/components/Content/gamification-content";
import TestimonialsContent from "@/components/Content/testimonials-content";

export default function Home() {
    return (
        <>
            <section
                className="relative flex flex-col items-center justify-center text-center text-white py-0 px-3">
                <MainContent></MainContent>
            </section>
            <section className={'bg-[#010202] h-14 w-full flex flex-col justify-center items-center'}>
                <ProgrammingLangContent></ProgrammingLangContent>
            </section>
            <section className={'bg-[#010202] w-full flex flex-col'}>
                <GamificationContent></GamificationContent>
                <TestimonialsContent></TestimonialsContent>
            </section>
        </>
    )
}