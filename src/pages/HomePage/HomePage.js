import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import HeroFeatured from "../../components/HeroFeatured/HeroFeatured";
import Description from "../../components/Description/Description";
import Comment from "../../components/Comment/Comment";
import VideoList from "../../components/VideoList/VideoList";
import "./HomePage.scss";

function HomePage() {
  const [currentVideo, setCurrentVideo] = useState({});
  const [videoCommentArr, setVideoCommentArr] = useState([]);
  const [videoGrid, setVideoGrid] = useState([]);
  const { videoId } = useParams();

  const api_uri = "https://project-2-api.herokuapp.com/videos/";
  const api_key = "?api_key=5dd2c0f0-9a60-41cc-bbe0-f5df18d43396";
  const firstId = "84e96018-4022-434e-80bf-000ce4cd12b8";

  useEffect(() => {
    const getApiData = async (videoId) => {
      try {
        const objResponse = await axios.get(`${api_uri}${videoId}${api_key}`);
        setCurrentVideo(objResponse.data);
        setVideoCommentArr(objResponse.data.comments);

        const listResponse = await axios.get(`${api_uri}${api_key}`);
        setVideoGrid(listResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    const selectedVideoId = videoId || firstId;

    if (currentVideo) {
      getApiData(selectedVideoId);
    }
  }, [videoId, currentVideo]);

  return (
    <>
      <HeroFeatured currentVideo={currentVideo} />

      {currentVideo && (
        <div className='homepage'>
          <div className='homepage__left'>
            <Description currentVideo={currentVideo} />
            <Comment videoCommentArr={videoCommentArr} />
          </div>

          <VideoList currentVideo={currentVideo} videoGrid={videoGrid} />
        </div>
      )}
    </>
  );
}

export default HomePage;
