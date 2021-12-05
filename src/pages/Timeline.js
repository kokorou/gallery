import React, { useState, useEffect } from "react";
import { MdSearch } from 'react-icons/md';
import ProjectItem from "../components/ProjectItem";
import ProjectInfo from "../data/timeline-data";
import '../CSS/timeline.css';

const TimelinePage =() =>{

    const [searchText, setSearchText] = useState('');
    const [projectData, setProjectData] = useState(ProjectInfo);

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
        <div className="container">
          <div className="row yt">
              <div className="title-text">
                <h1 className="text-center col-md-12">
                <i class="fab fa-youtube-square"></i>
                &nbsp; Weeelb Timeline
                </h1>
              </div>
          </div>
        </div>
        <div className="tl">
            <div className="searchBar">
                <form>
                    <input 
                    type="text"
                    value={searchText}
                    onChange={handleChange}
                    placeholder = "Project Name"
                    />
                    < MdSearch className="searchicon"/>
                </form>
            </div>
            <div className="allitems">
                {projectData.map(item=> (
                    <ProjectItem
                        key={item.id}
                        title={item.title}
                        desc={item.desc}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default TimelinePage