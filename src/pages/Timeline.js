import React, { useState, useEffect } from "react";
import { MdSearch } from 'react-icons/md';
import ProjectItem from "../components/ProjectItem";
import ProjectInfo from "../data/timeline-data";
import SectionTitle from "../components/SectionTitle";
import Modal from "../components/Modal";
import '../CSS/timeline.css';

const TimelinePage =() =>{

    const [searchText, setSearchText] = useState('');
    const [projectData, setProjectData] = useState(ProjectInfo);

    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        if (searchText === '') return;
        setProjectData(() =>
            ProjectInfo.filter((item) =>
                item.name.toLowerCase().match(searchText.toLowerCase())
            )
        );
    }, [searchText])

    function handleChange(e) {
        e.preventDefault();
        setSearchText(e.target.value);
        if (!e.target.value.length > 0){
            setProjectData(ProjectInfo);
        }
    }

    return (
        <>
        <SectionTitle heading="Timeline" subheading="some of my recent works"/>
        <div className="tl">
            <div className="searchBar">
                <form>
                    <input 
                    type="text"
                    value={searchText}
                    onChange={handleChange}
                    placeholder = "Project Name"
                    />
                    < MdSearch className="searchIcon"/>    
                </form>
            </div>
            <div className="allitems">
                {projectData.map(item=> (
                    <ProjectItem
                        key={item.id}
                        title={item.name}
                        desc={item.desc}
                        img={item.img}
                        setSelectedImg = {setSelectedImg}
                    />
                ))}
            </div>
           {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
        
        </div>
        </>
    )
}

export default TimelinePage