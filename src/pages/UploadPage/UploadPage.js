import "./UploadPage.scss";
import Form from "../../components/Form/Form";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import upload from "../../assets/Icons/upload.svg";

const UploadPage = () => {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    alert("Upload Successful");

    setUploadSuccess(true);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <section className='upload'>
        <h1 className='upload__title'>Upload Video</h1>
      </section>
      <main>
        <section className='upload__section'>
          <section className='upload__desktop'>
            <div className='upload__left'>
              <p className='upload__thumbnail'>VIDEO THUMBNAIL</p>
              <div className='upload__img-div'>
                <img
                  src={thumbnail}
                  alt='upload thumbnail'
                  className='upload__img'
                />
              </div>
            </div>
            <Form />
          </section>
          <div className='form__btn-tablet'>
            <section className='form__btn'>
              <Button
                src={upload}
                btnText='PUBLISH'
                type='submit'
                disabled={uploadSuccess}
                onClick={handleFormSubmit}
              />
              <Link to='/' className='form__cancel-a'>
                <div className='form__cancel'>CANCEL</div>
              </Link>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default UploadPage;
