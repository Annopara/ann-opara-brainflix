import { useState } from "react";
import "./HomePage.scss";
import VideoData from "../../data/video-details.json";
import HeroFeatured from "../../components/HeroFeatured/HeroFeatured";
import Description from "../../components/Description/Description";
import Comment from "../../components/Comment/Comment";
import VideoList from "../../components/VideoList/VideoList";

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState(VideoData[0]);

  const alterVideo = (videoObject) => {
    setCurrentVideo(videoObject);
  };

  return (
    <>
      <HeroFeatured currentVideo={currentVideo} />

      <div className='homepage'>
        <div className='homepage__left'>
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
};

export default HomePage;
