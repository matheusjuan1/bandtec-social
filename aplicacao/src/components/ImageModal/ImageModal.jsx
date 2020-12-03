import React from 'react';
import * as S from './style';

const ImageModal = ({image, imageModal, setImageModal}) => {
    
    function handleOutsideClick(event) {
        if(event.target === event.currentTarget) {
            setImageModal(false);
        }
    }
    
    return (
        <>
        {imageModal && 
        <S.Modal onClick={handleOutsideClick}>
            <S.Image src={image}>
            </S.Image>
        </S.Modal>}
        
        </>
    )
}

export default ImageModal;