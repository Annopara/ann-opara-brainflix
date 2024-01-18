import "./Header.scss";
import Logo from "../Logo/Logo";

import Button from "../Button/Button";

const Header = () => {
  const upload = "../../assets/Icons/upload.svg";
  const Logo = "../../assets/Logo/BrainFlix-logo.svg";
  const Search = "../../assets/Icons/search.svg";
  const avatar = "../../assets/Images/Mohan-muruge.jpg";

  return (
    <header>
      <Logo src={Logo} />

      <div>
        <form>
          <div className='search-container'>
            <img src={Search} alt='Search Icon' />
            <input name='search' value='search' placeholder='search' />
          </div>
        </form>

        <Button src={upload} btnText='UPLOAD' />

        <div>
          <img src={avatar} alt='Another Image' />
        </div>
      </div>
    </header>
  );
};

export default Header;
