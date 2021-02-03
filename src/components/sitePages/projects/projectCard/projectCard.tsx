import React, {useState} from "react";
import {StateProjectsPageType} from "../../../../state";
import Modal from "../../../modal/modal";


function ProjectCard({img, tag, title, description, link}: StateProjectsPageType) {

    const [modalActive, setModalActive] = useState<boolean>(false)

    function modalWindowHandler() {
        setModalActive(!modalActive)
    }

    let colorTag: string

    switch (tag) {
        case '#SPA':
            colorTag = '#f8d10c';
            break
        case '#LAYOUT':
            colorTag = '#4c8cfa';
            break
        case '#OTHER':
            colorTag = '#41f62c';
            break
        default:
            colorTag = 'white'
    }

    return (
        <>
            <div className='projectCard' onClick={() => modalWindowHandler()}>
                <div className='projectCardImages'
                     style={{background: `url(${img}) center no-repeat`, backgroundSize: 'cover'}}>
                </div>
                <div className='projectCardDescription'>
                    <p className='projectCardDescriptionTitle'>{title}</p>
                    <p className='projectCardCategoryTag' style={{color: `${colorTag}`}}>{tag}</p>
                </div>
            </div>

            {modalActive && <Modal
                closeHandler={modalWindowHandler}
                img={img}
                title={title}
                description={description}
                link={link}
            />}
        </>
    )
}


export default ProjectCard;