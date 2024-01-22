import "./VideoList.scss";

const VideoList = ({ videoData, currentVideo, alterVideo }) => {
  return (
    <>
      <div className='video__desktop'>
        <section className='video'>
          <h2 className='video__header'>NEXT VIDEOS</h2>
          <ul className='video__list'>
            {videoData.map((video) => {
              return (
                video.title !== currentVideo.title && (
                  <li
                    key={video.id}
                    onClick={() =>
                      alterVideo({
                        title: video.title,
                        channel: video.channel,
                        comments: video.comments,
                        image: video.image,
                        description: video.description,
                        views: video.views,
                        likes: video.likes,
                        timestamp: video.timestamp,
                        video: video.video,
                        isVideo: true,
                      })
                    }
                  >
                    <a href='#video-link' className='video__link'>
                      <section className='video__container'>
                        <section>
                          {video.isVideo ? (
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
                    </a>
                  </li>
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
