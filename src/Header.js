import React, {useState} from "react";
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className='header'>
        <div className="header__left">
          <MenuIcon />
          <Link to="/">
            <img 
              className = "header_logo"
              src="https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo.png" 
              alt="" />
          </Link>
        </div>
        <div className="header__input">
          <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type = 'text'/>
          <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton"/>
          </Link>
        </div>
        <div className="header__icons">
          <VideoCallIcon className = "header_icon"/>
          <AppsIcon className = "header_icon"/>
          <NotificationsIcon className = "header_icon"/>
          <Avatar className = "header_icon"/>
        </div>
        
    </div>
  );
}

export default Header;
