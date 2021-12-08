import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/footercol.css';

export default function FooterCol({ 
    heading='col heading',
    links = [
        {
            type: 'Links',
            title: 'Home',
            path: '/Home',
        },
        {
            type: 'Links',
            title: 'About',
            path: '/About',
        },
    ],
 }) {
    return (
        <div>
            <h1 className="heading">{heading}</h1>
            <ul>
                {links.map((item, index) => (
                    <li key={index}>
                        {item.type === 'Link'? (
                            <Link to={item.path}>{item.title}</Link>
                        ): (
                            <a href={item.path} target="_blank" rel="noreferrer">{item.title}</a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}