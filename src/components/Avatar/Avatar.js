import "./Avatar.scss";

const Avatar = ({ src }) => {
  return (
    <div className='avatar'>
      <img src={src} alt='User avatar' className='avatar__img' />
    </div>
  );
};

export default Avatar;
