import "./Button.scss";

function Button({ src, btnText, disabled, type, onClick }) {
  return (
    <div className='btn'>
      <img src={src} className='btn__icon' alt='Button icon' />
      <button
        className='btn__text'
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
}

export default Button;
