import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./HomePage.scss";
import HeroFeatured from "../../components/HeroFeatured/HeroFeatured";
import Description from "../../components/Description/Description";
import Comment from "../../components/Comment/Comment";
import VideoList from "../../components/VideoList/VideoList";

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState({});
  const [allVideos, setAllVideos] = useState([]);
  const { videoId } = useParams();

  const fetchVideoList = async () => {
    try {
      const videoData = await axios.get(
        `https://project-2-api.herokuapp.com/videos?api_key=e73656e8-9d57-427a-8900-b0511b15060e`
      );
      setAllVideos(videoData.data);
      const videoItem = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=e73656e8-9d57-427a-8900-b0511b15060e`
      );
      setCurrentVideo(videoItem.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideoList(videoId);
  }, []);

  // const featuredvideoId = videoId || allVideos[0].id;

  // const featuredvideo = allVideos.find(
  //   (cookie) => cookie.uuid === featuredvideoId
  // );

  // const filteredCookieData = allVideos.filter(
  //   (video) => video.id !== featuredvideoId
  // );

  return (
    <>
      <HeroFeatured currentVideo={currentVideo} />

      <div className='homepage'>
        <div className='homepage__left'>
          <Description allVideos={allVideos} />

          <Comment allVideos={allVideos} />
        </div>

        {/* VideoList */}
        <VideoList allVideos={allVideos} currentVideo={currentVideo} />
      </div>
    </>
  );
};

export default HomePage;
