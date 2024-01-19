import "./Header.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import Avatar from "../Avatar/Avatar";

import upload from "../../assets/Icons/upload.svg";
import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import Search from "../../assets/Icons/search.svg";
import avatarImg from "../../assets/Images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <>
      <header>
        <Logo src={BrainFlixLogo} />

        <div>
          <SearchBar src={Search} />

          <Button src={upload} btnText='UPLOAD' />
        </div>
        <Avatar src={avatarImg} />
      </header>
    </>
  );
};

export default Header;
