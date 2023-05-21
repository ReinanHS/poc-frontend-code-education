import HomeHeader from "@/components/Header/home-header";

export default function Home() {
    return (
        <div className={'flex flex-col h-screen'}>
            <div className={'w-full'}>
                <HomeHeader></HomeHeader>
            </div>
            <div>
                Content
            </div>
        </div>
    )
}
