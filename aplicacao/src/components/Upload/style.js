import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #78e5d5;
`;

const dragReject = css`
    border-color: #e57878;
`;


export const DropContainer = styled.div.attrs({
    className: 'dropzone'
})`
   border: 1px dashed #ddd;
   border-radius: 5px;
   margin-top: .8rem;
   cursor: pointer;
   transition: .3s;
   transform: initial;
   transition: height 0.2s ease;

   ${props => props.isDragActive && dragActive}
   ${props => props.isDragReject && dragReject}
`;

const messageColors = {
    default: '#999',
    error: '#e57878',
    sucess: '#78e5d5'
}

export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`;
