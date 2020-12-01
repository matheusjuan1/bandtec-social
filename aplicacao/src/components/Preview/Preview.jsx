import React from 'react';
import { Container,FileInfo, PreviewI } from './style';

const Preview = ({dataimg, setImg}) => {

    function handleClick() {
        setImg(null)
    }
    return (
        <>
        {dataimg && 
        <Container>
        <FileInfo>
            <div>
                <button onClick={handleClick}><i className="fas fa-times-circle"></i></button>
            </div>
        </FileInfo>
        <PreviewI src={dataimg.preview}>
        </PreviewI>
    </Container>}
    </>
    )
}

export default Preview;