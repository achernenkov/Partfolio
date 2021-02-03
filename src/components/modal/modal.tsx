import React from "react";
import s from './modal.module.css'
import {StateProjectsPageLinkType} from "../../state";

type ModalPropsType = {
    closeHandler: () => void
    img: string
    title: string
    description: string
    link: Array<StateProjectsPageLinkType>
}


function Modal({closeHandler, img, title, description, link}: ModalPropsType) {
    return (
        <div className={s.modalWrapper} onClick={() => {
            closeHandler()
        }}>
            <div className={s.modalBody}>
                <div className={s.modalHeader}>
                    <div className={s.close} onClick={() => {
                        closeHandler()
                    }}/>
                </div>
                <div className={s.modalContent}>
                    <div className={s.modalContentWrapper}>
                        <div className={s.cardIMG}
                             style={{background: `url(${img}) center no-repeat`, backgroundSize: 'cover'}}/>
                        <p className={s.modalTitle}>{title}</p>
                        <p className={s.modalText}>{description}</p>
                        <div className={s.modalBlockLink}>{
                            link.map(link => {
                                return (
                                    <a href={link.url}>{link.titleLink}</a>
                                )
                            })
                        }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal