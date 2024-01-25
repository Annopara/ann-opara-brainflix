import "./VideoList.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export const VideoList = () => {
  const [videoList, setVideoList] = useState([]);
  // const { videoId } = useParams();

  const fetchVideoList = async ({ id }) => {
    try {
      const videoData = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=123`
      );
      setVideoList(videoData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideoList();
  }, []);
  // videoList.find((video) => video.id === (videoId || videoList[0].id));

  return (
    <div className='video__desktop'>
      <section className='video'>
        <h2 className='video__header'>NEXT VIDEOS</h2>
        <ul className='video__list'>
          {videoList.map((video) => (
            <li key={video.id}>
              <Link to={`/${video.id}`}>
                <section className='video__container'>
                  <section>
                    {!video.video ? (
                      <video
                        controls
                        poster={video.image}
                        className='video__poster'
                      >
                        <source src={video.video} type='video/mp4' />
                      </video>
                    ) : (
                      <img
                        src={video.image}
                        alt={video.title}
                        className='video__poster'
                      />
                    )}
                  </section>
                  <section className='video__text'>
                    <h3 className='video__title'>{video.title}</h3>
                    <p className='video__author'>{video.channel}</p>
                  </section>
                </section>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default VideoList;
