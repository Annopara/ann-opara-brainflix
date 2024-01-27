import "./HeroFeatured.scss";
// import { useParams } from "react-router-dom";

const HeroFeatured = ({ filteredVideoData }) => {
  // const { videoId } = useParams(); // const { image, video } = videoDataAll;
  // console.log(videoDataAll);

  // const featuredvideo = videoDataAll.find((cookie) => cookie.id === videoId);
  return (
    <section className='hero'>
      <section className='hero__div'>
        <video
          controls
          poster={filteredVideoData.image}
          className='hero__video'
        >
          <source src={filteredVideoData.video} type='video/mp4' />
        </video>
      </section>
    </section>
  );
};

export default HeroFeatured;

// import "./HeroFeatured.scss";

// const HeroFeatured = ({ currentVideo }) => {
//   // const { image, video } = allVideo;
//   // const featuredvideo = videoList.find(video => video.id === (videoId || videoList[0].id))
//   return (
//     <div className='hero__container'>
//       <section className='hero'>
//         <section className='hero__div'>
//           <video controls poster={currentVideo.image} className='hero__video'>
//             <source src={currentVideo.video} type='video/mp4' />
//           </video>
//         </section>
//       </section>
//     </div>
//   );
// };

// export default HeroFeatured;
