import React from "react";
import { Nav, Logo, NavMenu, Login } from "./styles/Header.Styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../../features/user/userSlice";
// import { provider } from "../../firebase";

const Header = (props) => {
  const dispach = useDispatch();
  const history = useHistory();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const setUser = (user) => {
    dispach(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo/logo.svg" alt="Disney+" />
      </Logo>

      {
        !userName ?
        <Login onclick={handleAuth}>Login</Login>
      }

      <NavMenu>
        <a href="/home">
          <img src="/images/icons/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/icons/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/icons/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/icons/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/icons/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/icons/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
};

export default Header;
