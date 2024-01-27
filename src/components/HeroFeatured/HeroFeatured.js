import "./HeroFeatured.scss";

const HeroFeatured = ({ currentVideo }) => {
  const { image, video } = currentVideo;
  return (
    <div className='hero__container'>
      <section className='hero'>
        <section className='hero__div'>
          <video controls poster={image} className='hero__video'>
            <source src={video} type='video/mp4' />
          </video>
        </section>
      </section>
    </div>
  );
};

export default HeroFeatured;
