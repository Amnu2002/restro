import React from 'react'
import { useEffect, } from 'react'

export default function Printfooditem() {
    useEffect(() => {
        const Apifetch= async(value)=>{
            let apiurl= `https://api.edamam.com/search?q=${value}&app_id=59852e2b&app_key=68ffe18c183e28ded3c765e274a84e21`;
            let data = await fetch(apiurl);
            let parsedData = await data.json()
            // console.log(parsedData.hits)
            // setarticles(parsedData.hits);
            // settotalResult(parsedData.count);
            // console.log(parsedData.hits[0].recipe);
            // console.log(articles);
            // console.log(articles.map((Element)=>{
            //     console.log(Element)
            // }))
        }
        Apifetch();
    }, [])
    return (
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corrupti quidem dolores officiis eius quia et aspernatur, molestiae alias nisi odio esse provident repellendus maxime, blanditiis hic asperiores soluta labore!
        </div>
    )
}
