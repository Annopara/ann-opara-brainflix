import "./Header.scss";
import Logo from "../Logo/Logo";

import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const upload = "../../assets/Icons/upload.svg";
  const Logo = "../../assets/Logo/BrainFlix-logo.svg";
  const Search = "../../assets/Icons/search.svg";
  const avatar = "../../assets/Images/Mohan-muruge.jpg";

  return (
    <header>
      <Logo src={Logo} />

      <div>
        <SearchBar src={Search} />

        <Button src={upload} btnText='UPLOAD' />

        <div>
          <img src={avatar} alt='Another Image' />
        </div>
      </div>
    </header>
  );
};

export default Header;
