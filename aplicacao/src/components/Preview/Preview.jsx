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
                <button onClick={handleClick}><i class="fas fa-times-circle"></i></button>
            </div>
        </FileInfo>
        <PreviewI style={{backgroundImage: `url(${dataimg.preview})`}}>
        </PreviewI>
    </Container>}
    </>
    )
}

export default Preview;