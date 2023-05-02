import React from "react";

export function Testimonial({name, title, text,path}) {
    return(
        <div className="user-container">
            <div className="header">
                <img src={path} alt={name}></img>
                <h4>{name}</h4>
            </div>
            <div className="user-testimonial">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}