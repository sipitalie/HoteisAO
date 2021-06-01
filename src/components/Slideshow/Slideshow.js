import React, {useState, useEffect} from 'react';
import { FaChevronLeft, FaChevronRight, FaExpand  } from "react-icons/fa";
import api from '../../service/api';
import ImgComp from './ImgComp';
import h1 from '../../assets/h1.jpg';



export default function Slider(props){
    const  id_quarto= props.quarto_id
       
    const [listurl, Setlisturls]=useState([]);
    const [x, setX]=useState(0)
   
    useEffect( () => {
        api.get(`api.v1/gallery/${id_quarto}`
       ).then(response=>{
            const urls=response.data.map((imgfile)=>{
                return <ImgComp src={`http://127.0.0.1:8000${imgfile.file}`}/>
                });
            Setlisturls(urls);    
        }).catch((err)=>{
            console.log(err)})
        },[id_quarto]); 
    const goLeft=()=>{
        x=== 0 ? setX( 0 ) : setX(x + 100);
    }
    const goRight=()=>{
        x=== -100 * (listurl.length -1) ? setX(0) : setX(x -100);   
    }
   //const delete=()=>{
   //    setTimeout(() => {goRight(); }, 7000);
   // }
    const expand =()=>{
        console.info("ola") 
    }    
    return(
        <div className="Slider">
            {
                listurl.length > 0 ? (listurl.map((item, index)=>{
                    return(
                        <div key={index} className="Slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
                ): (<ImgComp src={h1}/>)}
            <span className="span-goLeft" >
                <button id ="goLeft" onClick={goLeft}>
                    <div ><FaChevronLeft/></div>  
                </button>
            </span>

            <span  className="span-goRight">
                <button id ="goRight" onClick={goRight}>
                    <div><FaChevronRight/></div>  
                </button>   
            </span>
            <span className="span-expandSlide">
                <button id ="expandSlider" onClick={expand}>
                    <div><FaExpand/></div>  
                </button> 
            </span> 
        </div>
        
    )   
};
/*<a 
                                href={uploadeFile.url}
                                target="_blank"
                                rel="noopener norefrrer"
                            ></a>*/
                    
                    
         
                    

