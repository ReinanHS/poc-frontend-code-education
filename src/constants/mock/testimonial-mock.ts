import {TestimonialDto} from "@/dto/testimonial-dto";

export default function getTestimonialsData(): TestimonialDto[] {
    return [
        {
            content: 'Eu sempre achei programação uma disciplina intimidante, até descobrir essa plataforma de ensino com gamificação.',
            author_name: 'Anderson Batista',
            author_photo: '/content/home/testimonials/andeson.jpg',
            author_office: 'Estudante na UFS',
        },
        {
            content: 'Nunca pensei que aprender programação pudesse ser tão divertido! A plataforma de gamificação me proporcionou uma experiência de aprendizagem interativa e envolvente.',
            author_name: 'Gabriel Costa',
            author_photo: '/content/home/testimonials/gabriel.jpg',
            author_office: 'Estudante no IFS',
        },
        {
            content: 'Eu nunca fui muito fã de estudar, mas a plataforma de ensino de linguagem de programação com gamificação mudou completamente minha perspectiva.',
            author_name: 'Reinan Gabriel',
            author_photo: '/content/home/testimonials/reinan.jpg',
            author_office: 'Estudante no IFS',
        }
    ]
}