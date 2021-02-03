import React from "react";
import {StateProjectsPageType} from "../../../../state";


function ProjectCard({img, tag, title}:StateProjectsPageType) {

    let colorTag: string

    switch (tag){
        case '#SPA': colorTag = '#f8d10c'; break
        case '#LAYOUT': colorTag = '#4c8cfa'; break
        case '#OTHER': colorTag = '#41f62c'; break
        default: colorTag = 'white'
    }

    return (
        <div className='projectCard'>
                <div className='projectCardImages' style={{background: `url(${img}) center no-repeat`, backgroundSize: 'cover'}}>
            </div>
            <div className='projectCardDescription'>
                <p className='projectCardDescriptionTitle'>{title}</p>
                <p className='projectCardCategoryTag' style={{color: `${colorTag}`}}>{tag}</p>
            </div>
        </div>
    )
}


export default ProjectCard;