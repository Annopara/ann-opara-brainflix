import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// import { useState } from "react";
import "../../styles/partials/_global.scss";
// import VideoData from "../../data/video-details.json";
import "./HomePage.scss";
import HeroFeatured from "../../components/HeroFeatured/HeroFeatured";
import Description from "../../components/Description/Description";
import Comment from "../../components/Comment/Comment";
import VideoList from "../../components/VideoList/VideoList";

const HomePage = () => {
  const [videoGrid, setVideoGrid] = useState([]);
  const [videoDataAll, setVideoDataAll] = useState({});
  const { videoId } = useParams();

  const fetchVideoList = async (id) => {
    try {
      const videolist = await axios.get(
        `https://project-2-api.herokuapp.com/videos?api_key=e73656e8-9d57-427a-8900-b0511b15060e`
      );
      setVideoGrid(videolist.data);
      const videoData = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=e73656e8-9d57-427a-8900-b0511b15060e`
      );
      setVideoDataAll(videoData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideoList(videoId);
  }, []);

  const featuredMovieId = videoId || videoDataAll.id;

  const featuredvideo = videoDataAll[featuredMovieId];

  const filteredVideoData = Object.values(videoDataAll).filter(
    (cookie) => cookie.id !== featuredMovieId
  );

  return (
    <>
      <HeroFeatured filteredVideoData={filteredVideoData} />

      <div className='homepage'>
        <div className='homepage__left'>
          <Description filteredVideoData={filteredVideoData} />

          {/* <Comment currentVideo={currentVideo} alterVideo={alterVideo} /> */}
          <Comment filteredVideoData={filteredVideoData} />
        </div>

        {/* VideoList */}
        <VideoList
          videoDataAll={videoDataAll}
          videoGrid={videoGrid}
          // alterVideo={alterVideo}
        />
      </div>
    </>
  );
};

export default HomePage;
