import React, { useState } from 'react'
import './Foodtimecards.css'
import {Link} from 'react-router-dom'
export default function Foodtimecards(props) {

    const [articles , setarticles] = useState([]);
    const Apifetch= async(value)=>{
        let apiurl= `https://api.edamam.com/search?q=${value}&app_id=59852e2b&app_key=68ffe18c183e28ded3c765e274a84e21`;
        let data = await fetch(apiurl);
        let parsedData = await data.json()
        setarticles(parsedData.hits);
        
    }
        
    return (
            <div className='cardmain' onClick={()=>Apifetch(`${props.time}`)}>
                
                    <div className='cardimage'>
                        <img src={props.imageUrl} className='cardimage1'/>
                    </div>
                    <div className='cardtext'>
                        <h1>{props.time}</h1>
                    </div>
            </div>
    )
}



