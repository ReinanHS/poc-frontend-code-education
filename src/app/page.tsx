import ProgrammingLangContent from "@/components/Content/programming-lang-content";
import MainContent from "@/components/Content/main-content";
import GamificationContent from "@/components/Content/gamification-content";
import TestimonialsContent from "@/components/Content/testimonials-content";
import AboutContent from "@/components/Content/about-content";
import Faq from "@/components/Content/faq";
import SectionTitle from "@/components/Section/section-title";
import Video from "@/components/Video/video";

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
            <SectionTitle align={'center'}
                          title={'Gamificação na educação'}
                          preTitle={'Sobre'}
                          summary={'Nossa plataforma inovadora de ensino de linguagem de programação é projetada ' +
                              'especificamente para alunos que estão cursando cursos de graduação ' +
                              'com disciplinas introdutórias de programação.'}>
                <GamificationContent></GamificationContent>
            </SectionTitle>
            <SectionTitle align={'center'}
                          title={'Aqui está o que nossos alunos disseram'}
                          preTitle={'Testemunhos'}
                          summary={'Veja o que os nossos alunos estão falando a respeito da nossa ' +
                              'plataforma e das nossas metodologias de ensino.'}>
                <TestimonialsContent></TestimonialsContent>
            </SectionTitle>
            <SectionTitle align={'center'}
                          title={'Para quem essa plataforma é destinada?'}
                          preTitle={'Plataforma'}
                          summary={'A nossa plataforma é destinada tanto para alunos quanto para professores, ' +
                              'proporcionando uma experiência completa e integrada de ensino de linguagem de ' +
                              'programação. Acreditamos que a colaboração entre alunos e professores é essencial ' +
                              'para um aprendizado eficaz.'}>
                <AboutContent></AboutContent>
            </SectionTitle>
            <SectionTitle align={'center'}
                          title={'Perguntas frequentes'}
                          preTitle={'FAQ'}
                          summary={'Veja abaixo as principais perguntas que recebemos de nossos usuários.'}>
                <Faq></Faq>
            </SectionTitle>
            <SectionTitle align={'center'}
                          title={'Saiba como funciona a nossa plataforma'}
                          preTitle={'Assista um video'}
                          summary={'Assista ao nosso vídeo demonstrativo e descubra como a nossa plataforma funciona. ' +
                              'Veja em primeira mão como você pode aproveitar os diversos recursos disponíveis ' +
                              'para uma experiência completa de aprendizado.'}>
                <Video></Video>
            </SectionTitle>
        </>
    )
}