import React from 'react'
import trollFace from '../assets/images/Troll-Face.png'

export const Header = ({ title }) => {
    return (
        <header className='header'>
            <img className='header--image' src={trollFace} />
            <h2 className='header--title'>{title}</h2>
    
            <h4 className='header--project'>React Course - Project 3</h4>
        </header>
    )
}
