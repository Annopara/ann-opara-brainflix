import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import HeroFeatured from "../../components/HeroFeatured/HeroFeatured";
import Description from "../../components/Description/Description";
import Comment from "../../components/Comment/Comment";
import VideoList from "../../components/VideoList/VideoList";
import "./HomePage.scss";

const { REACT_APP_API_BASE_PATH } = process.env;

function HomePage() {
  const [currentVideo, setCurrentVideo] = useState({});
  const [videoCommentArr, setVideoCommentArr] = useState([]);
  const [videoGrid, setVideoGrid] = useState([]);
  const { videoId } = useParams();

  const api_uri = `${REACT_APP_API_BASE_PATH}/videos`;
  const firstId = "84e96018-4022-434e-80bf-000ce4cd12b8";

  useEffect(() => {
    const selectedVideoId = videoId || firstId;
    const getApiData = async (videoId) => {
      try {
        const objResponse = await axios.get(`${api_uri}/${videoId}`);
        setCurrentVideo(objResponse.data);
        setVideoCommentArr(objResponse.data.comments);

        const listResponse = await axios.get(`${api_uri}`);
        setVideoGrid(listResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    getApiData(selectedVideoId);
  }, [videoId]);

  return (
    <>
      <HeroFeatured currentVideo={currentVideo} />
      <main>
        {currentVideo && (
          <div className='homepage'>
            <div className='homepage__left'>
              <Description currentVideo={currentVideo} />
              <Comment videoCommentArr={videoCommentArr} />
            </div>

            <VideoList currentVideo={currentVideo} videoGrid={videoGrid} />
          </div>
        )}
      </main>
    </>
  );
}

export default HomePage;
