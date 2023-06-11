import {ExerciseDto} from "@/dto/exercise-dto";

export function getExercisesData(): ExerciseDto[] {
    return [
        {
            "id": 1,
            "blurb": "Introdução ao JAVA",
            "subtitle": "Conceitos básicos",
            "language": "Java",
            "summary": "Java está entre as linguagens de programação disponíveis mais populares, graças à sua versatilidade e compatibilidade. É amplamente utilizado para desenvolvimento de software, aplicativos móveis e desenvolvimento de sistemas maiores.",
            "rate": 4,
            "count_exercises": 15,
            "count_students": 400,
            "image": "https://developers.redhat.com/sites/default/files/styles/share/public/ST-java1_2x.png?itok=LP1xR4KL"
        },
        {
            "id": 2,
            "blurb": "Introdução ao Python",
            "subtitle": "Fundamentos essenciais",
            "language": "Python",
            "summary": "Python é uma linguagem de programação de alto nível, interpretada e de uso geral. É conhecida por sua simplicidade e legibilidade, sendo amplamente utilizada em desenvolvimento web, análise de dados, automação e inteligência artificial.",
            "rate": 5,
            "count_exercises": 20,
            "count_students": 145,
            "image": "https://miro.medium.com/v2/resize:fit:840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg"
        },
        {
            "id": 3,
            "blurb": "Desenvolvimento de aplicativos iOS com Swift",
            "subtitle": "Crie apps para iPhone e iPad",
            "language": "Swift",
            "summary": "Swift é uma linguagem de programação moderna desenvolvida pela Apple para criar aplicativos para iOS, macOS, watchOS e tvOS. Com sua sintaxe concisa e poderosa, é uma excelente escolha para o desenvolvimento de aplicativos móveis.",
            "rate": 4.2,
            "count_exercises": 18,
            "count_students": 85,
            "image": "https://www.appcoda.com/learnswiftui/images/basic/swiftui-basic-1.jpg"
        },
        {
            "id": 4,
            "blurb": "Desenvolvimento web com JavaScript",
            "subtitle": "Do básico ao avançado",
            "language": "JavaScript",
            "summary": "JavaScript é a linguagem de programação mais utilizada para desenvolvimento web. Com ela, é possível criar interatividade, animações, manipular elementos da página e criar aplicações web completas.",
            "rate": 5,
            "count_exercises": 25,
            "count_students": 98,
            "image": "https://marquesfernandes.com/wp-content/uploads/2020/01/1555172.jpg"
        },
        {
            "id": 5,
            "blurb": "Desenvolvimento de jogos com Unity",
            "subtitle": "Crie seus próprios jogos",
            "language": "C#",
            "summary": "Unity é uma engine de desenvolvimento de jogos extremamente popular e versátil. A linguagem C# é amplamente utilizada para criar jogos nessa plataforma, permitindo o desenvolvimento de jogos para várias plataformas, como PC, consoles e dispositivos móveis.",
            "rate": 4,
            "count_exercises": 20,
            "count_students": 42,
            "image": "https://ilovebenerd.com.br/wp-content/uploads/2023/03/unity-logo_teCooZK.jpg"
        },
        {
            "id": 6,
            "blurb": "Desenvolvimento de aplicações Android com Kotlin",
            "subtitle": "Crie apps para dispositivos Android",
            "language": "Kotlin",
            "summary": "Kotlin é uma linguagem de programação moderna que se tornou oficial para o desenvolvimento de aplicativos Android. Com sua sintaxe concisa e recursos avançados, Kotlin permite criar aplicativos Android de forma mais produtiva e segura.",
            "rate": 4,
            "count_exercises": 17,
            "count_students": 70,
            "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210707194050/A-Complete-Guide-to-Learn-Kotlin-for-Android-App-Development.png"
        },
        {
            "id": 7,
            "blurb": "Desenvolvimento de APIs RESTful com Node.js",
            "subtitle": "Crie APIs escaláveis",
            "language": "JavaScript",
            "summary": "Node.js é uma plataforma que permite desenvolver aplicações backend utilizando JavaScript. Com Node.js, é possível criar APIs RESTful de alta performance e escalabilidade, sendo uma opção popular para desenvolvimento de servidores e aplicações web.",
            "rate": 4.6,
            "count_exercises": 22,
            "count_students": 10,
            "image": "https://img.ibxk.com.br/2022/10/03/03194313522395.jpg?ims=328x"
        },
        {
            "id": 8,
            "blurb": "Introdução à programação em C",
            "subtitle": "Aprenda os fundamentos",
            "language": "C",
            "summary": "C é uma linguagem de programação de propósito geral amplamente utilizada. Conhecida por sua eficiência e controle de baixo nível, é frequentemente utilizada em sistemas operacionais, drivers de dispositivo e aplicações que requerem desempenho otimizado.",
            "rate": 4,
            "count_exercises": 16,
            "count_students": 20,
            "image": "https://img.ibxk.com.br/2022/10/03/03194313522395.jpg?ims=328x"
        },
        {
            "id": 9,
            "blurb": "Desenvolvimento de aplicações web com Ruby on Rails",
            "subtitle": "Construa aplicações rápidas e eficientes",
            "language": "Ruby",
            "summary": "Ruby on Rails é um framework de desenvolvimento web que utiliza a linguagem Ruby. Com sua filosofia de convenção sobre configuração, é possível criar aplicações web rapidamente, com um código limpo e conciso.",
            "rate": 4,
            "count_exercises": 19,
            "count_students": 0,
            "image": "https://img.ibxk.com.br/2022/10/03/03194313522395.jpg?ims=328x"
        },
        {
            "id": 10,
            "blurb": "Desenvolvimento de aplicações desktop com C#",
            "subtitle": "Crie aplicações para Windows",
            "language": "C#",
            "summary": "C# é uma linguagem de programação moderna e poderosa desenvolvida pela Microsoft. Com ela, é possível criar aplicações desktop para o sistema operacional Windows, aproveitando a rica biblioteca de classes e recursos da plataforma .NET.",
            "rate": 5,
            "count_exercises": 24,
            "count_students": 0,
            "image": "https://img.ibxk.com.br/2022/10/03/03194313522395.jpg?ims=328x"
        },
        {
            "id": 11,
            "blurb": "Desenvolvimento de aplicações web com PHP",
            "subtitle": "Construa sites dinâmicos",
            "language": "PHP",
            "summary": "PHP é uma linguagem de programação amplamente utilizada para desenvolvimento web. Com ela, é possível criar sites dinâmicos, interativos e integrados a bancos de dados, sendo uma escolha popular para desenvolvimento de aplicações web.",
            "rate": 4,
            "count_exercises": 21,
            "count_students": 0,
            "image": "https://img.ibxk.com.br/2022/10/03/03194313522395.jpg?ims=328x"
        },
        {
            "id": 12,
            "blurb": "Desenvolvimento de aplicações web com ASP.NET",
            "subtitle": "Construa aplicações escaláveis",
            "language": "C#",
            "summary": "ASP.NET é um framework de desenvolvimento web da Microsoft, que utiliza a linguagem C#. Com ASP.NET, é possível criar aplicações web escaláveis, seguras e de alto desempenho, aproveitando os recursos da plataforma .NET.",
            "rate": 4,
            "count_exercises": 23,
            "count_students": 8,
            "image": "https://img.ibxk.com.br/2022/10/03/03194313522395.jpg?ims=328x"
        },
        {
            "id": 13,
            "blurb": "Desenvolvimento de aplicações móveis com React Native",
            "subtitle": "Crie apps para iOS e Android",
            "language": "JavaScript",
            "summary": "React Native é um framework JavaScript que permite desenvolver aplicativos móveis nativos para iOS e Android. Com uma base de código compartilhada, é possível criar apps para ambas as plataformas de forma eficiente e produtiva.",
            "rate": 4,
            "count_exercises": 19,
            "count_students": 9,
            "image": "https://img.ibxk.com.br/2022/10/03/03194313522395.jpg?ims=328x"
        },
        {
            "id": 14,
            "blurb": "Introdução à programação orientada a objetos",
            "subtitle": "Conceitos fundamentais",
            "language": "Diversas",
            "summary": "A programação orientada a objetos é um paradigma amplamente utilizado na indústria de software. Nesse curso, você aprenderá os conceitos fundamentais desse paradigma, que são aplicáveis a várias linguagens de programação, como Java, C++, C#, Python, entre outras.",
            "rate": 4,
            "count_exercises": 18,
            "count_students": 80,
            "image": "https://img.ibxk.com.br/2022/10/03/03194313522395.jpg?ims=328x"
        },
        {
            "id": 15,
            "blurb": "Desenvolvimento de aplicações web com Angular",
            "subtitle": "Crie aplicações web modernas",
            "language": "TypeScript",
            "summary": "Angular é um framework TypeScript desenvolvido pelo Google para a criação de aplicações web modernas. Com sua arquitetura escalável e recursos avançados, Angular permite criar aplicações web robustas e de alta performance.",
            "rate": 5,
            "count_exercises": 22,
            "count_students": 4,
            "image": "https://img.ibxk.com.br/2022/10/03/03194313522395.jpg?ims=328x"
        }
    ];
}