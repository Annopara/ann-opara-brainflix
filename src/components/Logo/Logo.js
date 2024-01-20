import "./Logo.scss";

const Logo = ({ src }) => {
  return (
    <div className='logo'>
      <img src={src} alt='Logo' className='logo__img' />
    </div>
  );
};

export default Logo;
