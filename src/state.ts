import bgImg from './srcFile/testCardBgBig.jpg'


export type StateProjectsPageType = {
    img: string
    title: string
    tag: string
}

export const stateProjectsPage:Array<StateProjectsPageType> = [
    {title: 'Social network', img: `${bgImg}`, tag: '#SPA'},
    {title: 'Social network', img: `${bgImg}`, tag: '#LAYOUT'},
    {title: 'Social network', img: `${bgImg}`, tag: '#OTHER'},
    {title: 'Social network', img: `${bgImg}`, tag: '#SPA'}
]


export default 1;