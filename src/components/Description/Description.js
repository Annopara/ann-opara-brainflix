import "./Description.scss";
import viewIcon from "../../assets/Icons/views.svg";
import likeIcon from "../../assets/Icons/likes.svg";

import formatDate from "../../utils/timestampDate";

const Description = ({ currentVideo }) => {
  const { title, channel, timestamp, views, likes, description } = currentVideo;

  const date = new Date(timestamp);
  const formattedDate = formatDate(date);

  return (
    <>
      <section className='description'>
        <h1 className='description__title'>{title}</h1>

        {/* CHANNEL */}
        <div className='description__details'>
          <div className='description__left'>
            <p className='description__channel'>By {channel}</p>
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
              {views}
            </p>
            <p className='description__fade description__p description__p--none'>
              <img
                src={likeIcon}
                alt='likes icon'
                className='description__icon'
              />
              {likes}
            </p>
          </div>
        </div>
        {/* Description */}
        <section className='description__content'>
          <p>{description}</p>
        </section>
      </section>
    </>
  );
};

export default Description;
