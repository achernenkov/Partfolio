import React, {useState} from "react";
import {StateProjectsPageType} from "../../../state";
import ProjectCard from "./projectCard/projectCard";


type ProjectsPropsType = {
    state:Array<StateProjectsPageType>
}

type activeTagType = '#SPA' | '#LAYOUT' | '#OTHER' | '#All'

function Projects({state}: ProjectsPropsType){

    const [activeTag, setActiveTag] = useState<activeTagType>('#All')

    function handlerActiveTag(activeTag: activeTagType){
        setActiveTag(activeTag)
    }

    let filteredCard: Array<StateProjectsPageType> = state

    if(activeTag === '#SPA'){
        filteredCard = state.filter(el => el.tag === '#SPA')
    }

    if(activeTag === '#LAYOUT'){
        filteredCard = state.filter(el => el.tag === '#LAYOUT')
    }

    if(activeTag === '#OTHER'){
        filteredCard = state.filter(el => el.tag === '#OTHER')
    }


    return (
        <div className='pageWrapper'>
            <div className='projectContentWrapper'>
                <div className='projectFilter'>
                    <button className='buttonProjectFilter all' onClick={() => {handlerActiveTag('#All')}}>#All</button>
                    <button className='buttonProjectFilter spa' onClick={() => {handlerActiveTag('#SPA')}}>#SPA</button>
                    <button className='buttonProjectFilter layout' onClick={() => {handlerActiveTag('#LAYOUT')}}>#LAYOUT</button>
                    <button className='buttonProjectFilter other' onClick={() => {handlerActiveTag('#OTHER')}}>#OTHER</button>
                </div>
                <div className='projectWrapper'>
                    {filteredCard.map(card => {
                        return (
                            <ProjectCard
                                img={card.img}
                                title={card.title}
                                tag={card.tag}
                                description={card.description}
                                link={card.link}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects;