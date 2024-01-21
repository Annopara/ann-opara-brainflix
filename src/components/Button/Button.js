import "./Button.scss";

function Button({ src, btnText }) {
  return (
    <div className='btn'>
      <img src={src} className='btn__icon' alt='Button icon' />
      <button className='btn__text '>{btnText}</button>
    </div>
  );
}

export default Button;
