import React from 'react';

import {FiWifi} from 'react-icons/fi';
import { IoMdRestaurant,IoMdFitness } from "react-icons/io";


export default function Atrativos(){
    return(
        <>
            <div className="class-wifi-restaurant-gym">
                    <div className="free-Wi-fi">
                        <div><FiWifi/></div> 
                    </div>
                    <div className="restaurant">
                        <div><IoMdRestaurant/></div> 
                    </div>
                    <div className="gym">
                        <div><IoMdFitness/></div>
                    </div> 
                </div>

        </>
    );

}