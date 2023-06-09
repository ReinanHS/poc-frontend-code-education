import Image from "next/image";
import getTestimonialsData from "@/constants/mock/testimonial-mock";

export default function TestimonialsContent() {
    const testimonials = getTestimonialsData()

    return (
        <div className="container p-8 mx-auto xl:px-0 ">
            <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                {
                    testimonials.map((testimonial, index) => {
                        return (
                            <div className="lg:col-span-2 xl:col-auto" key={index}>
                                <div
                                    className="flex flex-col justify-between w-full h-full px-14 rounded-2xl py-14 bg-rose-100/10">
                                    <p className="text-2xl leading-normal ">
                                        {testimonial.content}
                                    </p>
                                    <div className="flex items-center mt-8 space-x-3">
                                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                            <Image alt="Avatar" src={testimonial.author_photo} width={40} height={40}/>
                                        </div>
                                        <div>
                                            <div className="text-lg font-medium">{testimonial.author_name}</div>
                                            <div className="text-gray-600 dark:text-gray-400">{testimonial.author_office}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}