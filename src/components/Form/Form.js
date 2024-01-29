import "./Form.scss";
import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form__tablet'>
          <label className='form__label'>
            TITLE YOUR VIDEO
            <input
              type='text'
              name='video'
              className='form__input'
              placeholder='Add a title to your video'
              id='myForm'
            />
          </label>
          <div className='form__textarea-div'>
            <label className='form__label'>
              ADD A VIDEO DESCRIPTION
              <input
                type='text'
                name='description'
                className='form__textarea form__input'
                placeholder='Add a description to your video'
              />
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
