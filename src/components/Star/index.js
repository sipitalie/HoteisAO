import React from 'react'
import { FaStar} from "react-icons/fa";
export default function STAR({star}){
    return(
        <div className="class-star">
            <div className="class-star-5">
                { star ===5 && <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>}
                { star ===4 && <div><FaStar/><FaStar/><FaStar/><FaStar/></div>}
                { star ===3 && <div><FaStar/><FaStar/><FaStar/></div>}
                { star ===2 && <div><FaStar/><FaStar/></div>}
                { star ===1 && <div><FaStar/></div>}  
            </div>
        </div>
    ) ;
}