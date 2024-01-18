import "./Logo.scss";

const Logo = ({ src }) => {
  return (
    <div>
      <img src={src} alt='Logo' />
    </div>
  );
};

export default Logo;
