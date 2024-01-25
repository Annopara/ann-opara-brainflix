import "./Description.scss";
import viewIcon from "../../assets/Icons/views.svg";
import likeIcon from "../../assets/Icons/likes.svg";
import formatDate from "../../utils/timestampDate";
import axios from "axios";

import { useEffect, useState } from "react";

const Description = ({ id }) => {
  const [videoDetails, setVideoDetails] = useState({});

  const fetchFullVideoDetails = async () => {
    try {
      const videoDetailsResponse = await axios.get(
        `https://project-2.com/videos/${id}?api_key=;;;;;`
      );
      setVideoDetails(videoDetailsResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFullVideoDetails();
  }, []);

  const date = new Date(videoDetails.timestamp);
  const formattedDate = formatDate(date);

  return (
    <>
      <section className='description__desktop'>
        <section className='description'>
          <h1 className='description__title'>{videoDetails.title}</h1>

          {/* CHANNEL */}
          <div className='description__details'>
            <div className='description__left'>
              <p className='description__channel'>By {videoDetails.channel}</p>
              <p className='description__fade'>{formattedDate}</p>
            </div>

            {/* ICONS */}
            <div className='description__right'>
              <p className='description__fade description__p'>
                <img
                  src={viewIcon}
                  alt='Views icon'
                  className='description__icon'
                />
                {videoDetails.views}
              </p>
              <p className='description__fade description__p description__p--none'>
                <img
                  src={likeIcon}
                  alt='likes icon'
                  className='description__icon'
                />
                {videoDetails.likes}
              </p>
            </div>
          </div>
          {/* Description */}
          <section className='description__content'>
            <p>{videoDetails.description}</p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Description;
