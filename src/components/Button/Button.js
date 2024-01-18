import "./Button.scss";

function Button({ src, btnText }) {
  return (
    <button className='btn'>
      <img src={src} className='btn__icon' alt='Button icon'></img> {btnText}
    </button>
  );
}

export default Button;
