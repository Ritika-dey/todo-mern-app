import React from 'react'
import bg from '../img/home_bg.png'

export default function Home() {
    return (  
        <figure className="text-center mt-5">
            <blockquote className="blockquote">
                <h1 className="home-text">Welcome to To-Do App...!!</h1>
            </blockquote>

            <img className="bg-img" src={bg} alt="background" />
        </figure>
    )
}
