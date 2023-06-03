interface MenuItem {
    name: string,
    link: string,
    absoluteHeader: boolean,
}

export default function MenuItemList (): MenuItem[] {
    return [
        {
            name: 'Home',
            link: '/',
            absoluteHeader: true,
        },
        {
            name: 'Exercícios',
            link: '/exercicios',
            absoluteHeader: false,
        },
        {
            name: 'Rank',
            link: '/rank',
            absoluteHeader: false,
        },
        {
            name: 'Fórum',
            link: '/forum',
            absoluteHeader: false,
        },
        {
            name: 'Blog',
            link: '/blog',
            absoluteHeader: false,
        }
    ];
}