import "./VideoList.scss";
import { Link } from "react-router-dom";

const VideoList = ({ videoDataAll, videoGrid }) => {
  return (
    <>
      <div className='video__desktop'>
        <section className='video'>
          <h2 className='video__header'>NEXT VIDEOS</h2>
          <ul className='video__list'>
            {videoGrid.map((video) => {
              return (
                video.title !== videoGrid.title && (
                  <Link to={`/${videoDataAll.id}`}>
                    <li
                      key={video.id}
                      title={video.title}
                      channel={video.channel}
                      comments={video.comments}
                      image={video.image}
                      description={video.description}
                      views={video.views}
                      likes={video.likes}
                      timestamp={video.timestamp}
                      video={video.video}
                      // isVideo = {true}
                    >
                      <a href='#video-link' className='video__link'>
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
                      </a>
                    </li>
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

// import "./VideoList.scss";
// import { Link } from "react-router-dom";

// export const VideoList = ({ videoData }) => {
//   return (
//     <div className='video__desktop'>
//       <section className='video'>
//         <h2 className='video__header'>NEXT VIDEOS</h2>
//         <ul className='video__list'>
//           {videoData.map((video) => (
//             <li key={video.id}>
//               <Link to={`/${video.id}`}>

//                 <section className='video__container'>
//                   <section>
//                     <img
//                       src={video.image}
//                       alt={video.title}
//                       className='video__poster'
//                     />
//                   </section>
//                   <section className='video__text'>
//                     <h3 className='video__title'>{video.title}</h3>
//                     <p className='video__author'>{video.channel}</p>
//                   </section>
//                 </section>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default VideoList;
