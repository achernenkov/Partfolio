import bgImg from './srcFile/testCardBgBig.jpg'


export type StateProjectsPageLinkType = {
    url: string
    titleLink: string
}

export type StateProjectsPageType = {
    img: string
    title: string
    tag: '#LAYOUT' | '#SPA' | '#OTHER'
    description: string
    link: Array<StateProjectsPageLinkType>
}

export const stateProjectsPage: Array<StateProjectsPageType> = [
    {
        title: 'Social network',
        img: `${bgImg}`,
        tag: '#SPA',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link: [{url: 'vk.com', titleLink: "ВКонтакте"}, {url: 'ok.ru', titleLink: 'OK.RU'}]
    },
    {
        title: 'Social network',
        img: `${bgImg}`,
        tag: "#OTHER",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link: [{url: 'vk.com', titleLink: "ВКонтакте"}, {url: 'ok.ru', titleLink: 'OK.RU'}]
    },
    {
        title: 'Social network',
        img: `${bgImg}`,
        tag: '#LAYOUT',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link: [{url: 'vk.com', titleLink: "ВКонтакте"}]
    },
    {
        title: 'Social network',
        img: `${bgImg}`,
        tag: '#LAYOUT',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link: [{url: 'vk.com', titleLink: "ВКонтакте"}, {url: 'ok.ru', titleLink: 'OK.RU'}]
    },
    {
        title: 'Social network',
        img: `${bgImg}`,
        tag: '#SPA',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link: [{url: 'vk.com', titleLink: "ВКонтакте"}]
    },
    {
        title: 'Social network',
        img: `${bgImg}`,
        tag: '#OTHER',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link: [{url: 'vk.com', titleLink: "ВКонтакте"}, {url: 'ok.ru', titleLink: 'OK.RU'}]
    },
    {
        title: 'Social network',
        img: `${bgImg}`,
        tag: '#SPA',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link: [{url: 'vk.com', titleLink: "ВКонтакте"}, {url: 'ok.ru', titleLink: 'OK.RU'}]
    },
    {
        title: 'Social network',
        img: `${bgImg}`,
        tag: '#OTHER',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link: [{url: 'vk.com', titleLink: "ВКонтакте"}, {url: 'ok.ru', titleLink: 'OK.RU'}]
    },
    {
        title: 'Social network',
        img: `${bgImg}`,
        tag: '#LAYOUT',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        link: [{url: 'vk.com', titleLink: "ВКонтакте"}, {url: 'ok.ru', titleLink: 'OK.RU'}]
    },
]


export default 1;