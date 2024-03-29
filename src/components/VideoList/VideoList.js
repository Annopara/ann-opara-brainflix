import React from "react";
import "./VideoList.scss";
import { Link } from "react-router-dom";

const VideoList = ({ videoGrid, currentVideo }) => {
  return (
    <>
      <div className='video__desktop'>
        <section className='video'>
          <h2 className='video__header'>NEXT VIDEOS</h2>
          <ul className='video__list'>
            {videoGrid.map((video) => {
              return (
                video.title !== currentVideo.title && (
                  <Link to={`/${video.id}`} key={video.id}>
                    <section className='video__container'>
                      <section>
                        <img
                          src={video.image}
                          alt={video.title}
                          className='video__poster'
                        />
                      </section>
                      <section className='video__text'>
                        <h3 className='video__title'>{video.title}</h3>
                        <p className='video__author'>{video.channel}</p>
                      </section>
                    </section>
                  </Link>
                )
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default VideoList;
