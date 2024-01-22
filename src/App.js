import "./App.css";
import { useState } from "react";
import "./styles/partials/_global.scss";
import VideoData from "./data/video-details.json";
import Header from "./components/Header/Header";
import HeroFeatured from "./components/HeroFeatured/HeroFeatured";
import Description from "./components/Description/Description";
import Comment from "./components/Comment/Comment";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [currentVideo, setCurrentVideo] = useState(VideoData[0]);

  const alterVideo = (videoObject) => {
    setCurrentVideo(videoObject);
  };

  return (
    <>
      <Header />
      <HeroFeatured currentVideo={currentVideo} />

      <div className='app'>
        <div className='app__left'>
          <Description currentVideo={currentVideo} alterVideo={alterVideo} />

          {/* Comment */}
          <Comment currentVideo={currentVideo} alterVideo={alterVideo} />
        </div>

        {/* VideoList */}
        <VideoList
          videoData={VideoData}
          currentVideo={currentVideo}
          alterVideo={alterVideo}
        />
      </div>
    </>
  );
}

export default App;
