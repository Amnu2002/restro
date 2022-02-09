import React from 'react'
import './Foodtime.css';
import Foodtimecards from './Foodtimecards';

const list = [
    
]

export default function Foodtime() {
    return (
        <div>
            <div className='foodtimecontainer'>
                <Foodtimecards time='BreakFast' imageUrl="https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="this is image" className='cardimage1'/>
                <Foodtimecards time='Lunch' imageUrl="https://img2.mashed.com/img/gallery/forgetting-to-eat-during-quarantine-heres-why/why-are-people-forgetting-to-eat-lunch-in-particular-1595441854.jpg" />
                <Foodtimecards time='Dinner' imageUrl="https://oneunderbanquet.com/wp-content/uploads/2014/11/thanksgiving-day-brunch-dinner-livonia.jpg"/>
            </div>
        </div>
    )
}
