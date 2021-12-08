import React from "react";
import OneImg from '../img/img_1.jpg';
import '../CSS/ProjectItem.css';


export default function ProjectItem({
    img = OneImg,
    title = 'Project Name',
    desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit, undo.',
    setSelectedImg
}) {
    return (
        <>
        <div className="phbox">
            <div className="img">
                <img src={img} alt="img" onClick={() => setSelectedImg(img)}/>
            </div>
            <div className="info">
                <h3 className="title">{title}</h3>
                <p className="desc">{desc}</p>
            </div>
        </div>
        </>
    )
}
