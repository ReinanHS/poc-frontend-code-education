import MenuItemList from "@/constants/menu-itens";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={'bg-black'}>
            <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center">
                    <h3 className="text-3xl mb-3">Baixe nosso aplicativo</h3>
                    <p>
                        Baixe nosso aplicativo para fazer os exercícios através do seu celular
                    </p>
                    <div className="flex justify-center my-10">
                        <div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8"/>
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Baixar na</p>
                                <p className="text-sm md:text-base"> Google Play Store</p>
                            </div>
                        </div>
                        <div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8"/>
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Baixar na</p>
                                <p className="text-sm md:text-base"> Apple Store</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Educacode 2023.</p>
                    <div className="order-1 md:order-2">
                        {
                            MenuItemList().map((item, index) => {
                                return (
                                    <Link href={item.link}
                                          key={index}
                                          className={'px-2'}>
                                        {item.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}