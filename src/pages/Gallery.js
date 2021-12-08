import React, {useState} from 'react';
import '../CSS/gallery.css';
import SectionTitle from "../components/SectionTitle";
import data from '../data/class-data';

const Gallery =() =>{

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgsrc] = useState(null);

    const getImg = (imgSrc) => {
        setTempImgsrc(imgSrc);
        setModel(true);
    }

    const handleClick = (e) => {
        if(e.target.classList.contains('model')){
            setModel(null);
        }
    }

    return (
        <>  
            <div className={model? "model open": "model"} onClick={handleClick}>
                <img src={tempimgSrc} alt="img"/>
            </div>
            
            <SectionTitle heading="SELECTED" subheading="Selected photos from gallery"/>

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

