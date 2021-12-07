import React, {useState} from 'react';
import '../CSS/gallery.css';
import SectionTitle from "../components/SectionTitle";
import CloseIcon from '../img/Close-40.png';
import data from '../data/class-data';


const Gallery =() =>{

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
            

            <SectionTitle heading="CLASSIC" subheading="some of my recent works"/>

            <div class="gallery">
                {data.map((item, index)=>{
                    return(
                        <div class="pics" key={index} onClick={()=>getImg(item.imgbSrc)}>
                            <div class="desc">
                                <div class="middle">
                                    <p>{item.month}</p>
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                            <div class="imgbox">
                                <img src={item.imgtSrc} style={{width: '100%'}} alt="img"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery

