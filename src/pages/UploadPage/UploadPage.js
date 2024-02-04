import "./UploadPage.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import upload from "../../assets/Icons/upload.svg";
import axios from "axios";

const { REACT_APP_API_BASE_PATH } = process.env;

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    try {
      const newUpload = {
        title,
        description: desc,
        image: "http://localhost:8080/public/default_img.jpg",
      };

      await axios.post(`${REACT_APP_API_BASE_PATH}/videos/`, newUpload);

      setTimeout(() => {
        alert("Upload Successful");
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDesc = (event) => {
    setDesc(event.target.value);
  };

  return (
    <>
      <section className='upload'>
        <h1 className='upload__title'>Upload Video</h1>
      </section>
      <main>
        <section>
          <section className='upload__all'>
            <div className='upload__img-div'>
              <p className='upload__thumbnail'>VIDEO THUMBNAIL</p>
              <img
                src={thumbnail}
                alt='upload thumbnail'
                className='upload__img'
              />
            </div>
            <form onSubmit={handleForm} className='upload__form'>
              <div className='upload__tablet'>
                <label className='upload__label'>
                  TITLE YOUR VIDEO
                  <input
                    type='text'
                    name='video'
                    className='upload__input'
                    placeholder='Add a title to your video'
                    value={title}
                    onChange={handleChangeTitle}
                  />
                </label>
                <div className='upload__textarea-div'>
                  <label className='upload__label'>
                    ADD A VIDEO DESCRIPTION
                    <input
                      type='text'
                      name='description'
                      className='upload__textarea upload__input'
                      placeholder='Add a description to your video'
                      value={desc}
                      onChange={handleChangeDesc}
                    />
                  </label>
                </div>
              </div>
            </form>
          </section>
          <div className='upload__btn-tablet'>
            <section className='upload__btn'>
              <Button
                src={upload}
                btnText='PUBLISH'
                type='submit'
                onClick={handleSubmit}
              />
              <Link to='/' className='upload__cancel-a'>
                <div className='upload__cancel'>CANCEL</div>
              </Link>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default UploadPage;
