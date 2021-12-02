import React, {useState} from 'react';
import '../CSS/gallery.css'
import CloseIcon from '../img/Close-40.png'

import Img1 from '../img/img_1.jpg';
import Img2 from '../img/img_2.jpg';
import Img3 from '../img/img_3.jpg';
import Img4 from '../img/img_4.jpg';
import Img5 from '../img/img_5.jpg';
import Img6 from '../img/img_6.jpg';
import Img7 from '../img/img_7.jpg';
import Img8 from '../img/img_8.jpg';
import Img9 from '../img/img_9.jpg';
import Img10 from '../img/img_10.jpg';
import Img11 from '../img/img_11.jpg';
import Img12 from '../img/img_12.jpg';
import Img13 from '../img/img_13.jpg';
import Img14 from '../img/img_14.jpg';
import Img15 from '../img/img_15.jpg';

const Gallery =() =>{

    let data =[
        {
            id: 1,
            imgSrc: Img1,
            desc: '2020',
        },
        {
            id: 2,
            imgSrc: Img2,
            desc: '2021',
        },
        {
            id: 3,
            imgSrc: Img3,
            desc: '2019',
        },
        {
            id: 4,
            imgSrc: Img4,
            desc: '2020',
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
        },

    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgsrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgsrc(imgSrc);
        setModel(true);
    }

    return (
        <>
            <div class={model? "model open": "model"}>
                <img src={tempimgSrc} alt="img"/>
                <img src={CloseIcon} class="close" onClick={()=>setModel(false)} alt="img" />
            </div>

            <div className="row yt">
                <div className="title-text">
                    <h1 className="text-center col-md-12">
                    <i class="fab fa-youtube-square"></i>
                    &nbsp; Weeelb Class
                    </h1>
                </div>
            </div>

            <div class="gallery">
                {data.map((item, index)=>{
                    return(
                        <div class="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}} alt="img"/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery

