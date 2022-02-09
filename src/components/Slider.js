import React from 'react'
import './Slider.css'
import { useEffect } from 'react';


const MyCollection = [
    {
      label: "First Picture",
      imgPath:"https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Food-HD-Backgrounds.jpg",
    },
    {
      label: "Second Picture",
      imgPath:
  "https://www.chiropracticmoves.com.au/wp-content/uploads/2019/12/Junk-food.jpg",
    },
    {
      label: "Third Picture",
      imgPath:
  "https://www.paradisefoodcourt.in/images/gallery/food-images/im26.jpg",
    },
  ];

export default function Slider() {
    
    const CollectionSize = MyCollection.length;
    const [index, setActiveStep] = React.useState(0);
    const goToNextPicture = () => {
      setActiveStep(index=> index+1);
    };
    const goToPreviousPicture = () => {
        setActiveStep(index => index-1);
    };

    useEffect(() => {
        let faaltu = 0
        let abc=setInterval(() => {
            setActiveStep(faaltu);
            faaltu=faaltu+1;
            if(faaltu>CollectionSize-1){
                faaltu=0;
            }
            return () => {
                clearInterval(abc);
            }
        }, 2000);
    
    },[])

    

        
    return (
        <div>
        <div className='mainslider'>
            <div className='imagebox'>
            <img src={MyCollection[index].imgPath} alt="this is imp" className='thisisimage' id="thisisimage"/>
            </div>
        </div>

        <button className='btn1' onClick={goToPreviousPicture} disabled={index===0}>&#10094;</button>
        <button className='btn2' onClick={goToNextPicture} disabled={index===CollectionSize-1}>&#10095;</button>
        </div>
    )
}
