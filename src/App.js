import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import "./styles/partials/_global.scss";
import VideoData from "./data/video-details.json";
import HeroFeatured from "./components/HeroFeatured/HeroFeatured";
import Views from "../src/assets/Icons/views.svg";
import Likes from "./assets/Icons/likes.svg";

function App() {
  const [currentVideo, setCurrentVideo] = useState(VideoData[0]);

  // const alterVideo = (videoObject) => {
  //   // if(Aman is trustworthy) {
  //   setCurrentVideo(videoObject);
  // };

  return (
    <>
      <Header />;{/* HERO SECTION */}
      <HeroFeatured currentVideo={currentVideo} />
      {/* Description */}
      <div className='App__flex'>
        <div>
          <h1>{VideoData[0].title}</h1>
          <div>
            <div>
              <p>By {VideoData[0].channel}</p>
              <p>{VideoData[0].timestamp}</p>

              <div>
                <p>
                  <img src={Views} alt='Views icon' />
                  1,001,023
                </p>
                <p>
                  {" "}
                  <img src={Likes} alt='likes icon' />
                  110,985
                </p>
              </div>
            </div>
            <p>{VideoData[0].description}</p>
          </div>
        </div>

        {/* Comment */}
        <section>
          <form></form>
        </section>
      </div>
    </>
  );
}

export default App;
