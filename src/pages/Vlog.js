import React from "react";
import "../App.css";
import SearchBar from "../components/SearchBar";
import youtube from "../apis/youtubeapi";
import VideoList from "../components/VideoList";
import VideoDetails from "../components/VideoDetails";
import SectionTitle from "../components/SectionTitle";
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
          <div className="info">
              <h1>Message!</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Vlog;