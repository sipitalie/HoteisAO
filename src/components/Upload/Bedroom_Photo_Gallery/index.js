import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState,useCallback, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import api from '../../../service/api';
import {uniqueId} from 'lodash';
import fileSize from 'filesize';


import {Content, Container} from './styles';
import UploadImgBedroom from './UploadImgBedroom';
import FileList from '../Filelist';
//import { Preview } from '../Filelist/styles';



export default function SendPhotosToTheBedroomGallery(props){
/*send photos to the room gallery
enviar fotos para a galeria do quarto*/  
    const [uploadeFiles, SetuploadFiles]=useState([]);
    const { id } =useParams();   
    useEffect(()=>{
        return ()=>{
            uploadeFiles.forEach((file)=> URL.revokeObjectURL(file.preview));
        };
    });

    const updatefile =useCallback(
        (id, data)=>{
        SetuploadFiles((state)=>state.map(
            (updatefile)=>(updatefile.id === id ? {...updatefile, ...data}:updatefile))
        );
    },[]);

    const processUpload=useCallback(
        (uploadeFile)=>{
        const data= new FormData();
        if(uploadeFile.file){
            data.append('file',uploadeFile.file);
            data.append('quarto',id );
        }

        api.post('api.v1/upload/gallery', data,{
            onUploadProgress: e =>{
                let progress= parseInt(Math.round((e.loaded *100)/e.total));
                console.log(`A imagem ${uploadeFile.name} esta ${progress}% carregada...`);
                
                updatefile(uploadeFile.id, {progress});
                },
            }).then(response=>{
                console.log(`A imagem ${uploadeFile.name} foi enviada `);
                updatefile(uploadeFile.id,{
                    uploaded:true,
                    id: response.data.id,
                    url:'http://127.0.0.1:8000'+response.data.file,
                });
            }).catch((err)=>{
                console.log(`houve um  problema ao fazer o upload da imagem ${uploadeFile.name} no servidor `);
                console.log(err)

                updatefile(uploadeFile.id,{
                    error:true,
                });
            });
        },[updatefile]);

    const handleUpload=useCallback(
        (files)=>{
        const newuploadeFiles=files.map(file=>({
            file,
            id:uniqueId(),
            name:file.name,
            readableSze: fileSize(file.size),
            preview: URL.createObjectURL(file),
            progress:0,
            uploaded:false,
            error: false,
            url:null,
        }));
        
        SetuploadFiles((state)=>state.concat(newuploadeFiles));
        newuploadeFiles.forEach(processUpload); 
    },[processUpload]);

    return(
        <>
            <Container>
                <Content>
                    <UploadImgBedroom onUpload={handleUpload}/>
                    {!!uploadeFiles.length && (<FileList files={uploadeFiles}/>)}
                </Content>
            </Container>

           
        </>
    )
};