import React from "react";
import "../App.css";
import SearchBar from "../components/SearchBar";
import youtube from "../apis/youtubeapi";
import VideoList from "../components/VideoList";
import VideoDetails from "../components/VideoDetails";
import SectionTitle from "../components/SectionTitle";
import { Icon } from '@iconify/react';
import '../CSS/vlog.css'

class Vlog extends React.Component {
  state = {
    videos: [],
    selectedVideo: "",
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("weeelb");
  }

  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };
  render() {
    return (
      <>
        <div className="container">
          <SectionTitle heading="Vlog" subheading="some of my recent works"/>
          <div className="row my-2">
            <div className="col-md-8">
              <div className="chanlogo">
                <p>Welcome to&nbsp;&nbsp;<a href="https://space.bilibili.com/400912136"><Icon icon="simple-icons:bilibili" /></a>&nbsp;&nbsp;<a href="https://www.youtube.com/channel/UCi9x19As0wRHppA3b2GPDCg"><Icon icon="logos:youtube-icon" /></a></p>
              </div>
              <SearchBar onFormSubmit={this.onTermSubmit} />
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="col-md-4">
              <VideoList
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Vlog;