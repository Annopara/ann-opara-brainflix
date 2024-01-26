import "./HeroFeatured.scss";

const HeroFeatured = ({ currentVideo }) => {
  // const { image, video } = allVideo;
  // const featuredvideo = videoList.find(video => video.id === (videoId || videoList[0].id))
  return (
    <div className='hero__container'>
      <section className='hero'>
        <section className='hero__div'>
          <video controls poster={currentVideo.image} className='hero__video'>
            <source src={currentVideo.video} type='video/mp4' />
          </video>
        </section>
      </section>
    </div>
  );
};

export default HeroFeatured;
