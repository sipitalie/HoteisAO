import React from 'react';
import 'react-circular-progressbar/dist/styles.css';

import {MdCheckCircle,MdError, MdLink} from 'react-icons/md';
import {CircularProgressbar} from 'react-circular-progressbar';
import {Container, FileInfo, Preview} from './styles' ;

export default function FileList(props){
   
    const files = props.files

    return(
        <Container>
            {files.map(uploadeFile=>(
               
                <li key={uploadeFile.id}>
                    <FileInfo>
                        <Preview src={uploadeFile.preview}/>
                        <div>
                            <strong>{uploadeFile.name}</strong>
                            <span>
                                {uploadeFile.readableSze}{''}
                                {!!uploadeFile.url && (<button onClick={() => {}}>Excluir</button>)}
                            </span>
                        </div>
                    </FileInfo>
                    <div>
                        {!uploadeFile.uploaded && !uploadeFile.error &&(<CircularProgressbar styles={
                            {root:{width:24},
                            path:{stroke:'#7159c1'}
                             }}
                            strokeWidth={10}
                            value={uploadeFile.progress} />
                        )}
                    
                        {uploadeFile.url &&(
                            <a 
                                href={uploadeFile.url}
                                target="_blank"
                                rel="noopener norefrrer"
                            >
                                <MdLink style={{marginRght:8}} size={24} color ="#222"/>
                            </a>)}
                        {uploadeFile.uploaded && <MdCheckCircle size={24} color="#78e5d5"/>}
                        {uploadeFile.error && <MdError size={24} color="#e57878"/>} 
                    
                    </div>
                </li>
            ))}
        </Container>
    )
};
