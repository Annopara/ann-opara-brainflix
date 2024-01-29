import "./Form.scss";

const Form = () => {
  // const [input, setInput] = useState("");
  // const [textarea, setTextarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <label className='form__label'>
          TITLE YOUR VIDEO
          <input
            type='text'
            name='video'
            className='form__input'
            placeholder='Add a title to your video'
          />
        </label>
        <div className='form__textarea-div'>
          <label className='form__label'>
            ADD A VIDEO DESCRIPTION
            <input
              type='password'
              name='password'
              className='form__textarea form__input'
              placeholder='Add a description to your video'
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default Form;
