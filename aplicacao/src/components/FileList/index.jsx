import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'
import { Container,FileInfo, Preview } from './style';

const FileList = () => (
    <Container>
        <FileInfo>
            <Preview src="https://upload-bandtec-social.s3.amazonaws.com/c8cbffcbf6d991258298195a0faa01e6-IMG_2294.jpg" />
            <div>
                <strong>profile.png</strong>
                <span>64kb <button>Excluir</button></span>
            </div>
        </FileInfo>
        <div>
            <CircularProgressbar 
                styles={{
                    root: { width: 24},
                    path: { stroke: '#FF005C'}
                }}
                strokeWidth={10}
                percentage={30}
                />
                    <a 
                    href="https://upload-bandtec-social.s3.amazonaws.com/c8cbffcbf6d991258298195a0faa01e6-IMG_2294.jpg"
                    targer="_blank"
                    rel="noopener noreferrer"
                    >
                        <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                    </a>
                    <MdCheckCircle size={24} color="#78e5d5" />
                    <MdError size={24} color="#e57878" />
        </div>
    </Container>
)

export default FileList;