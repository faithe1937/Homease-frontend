import React from "react";
import { useUserSession } from "../context/user-context";

const ProfileNav = () => {
  const { user, logOut } = useUserSession();

  function onClick(e) {
    e.preventDefault();
    logOut();
  }

  return (
    <ul class="navbar-nav">
      <li className="nav-item">
        <span className="navbar-text"> Welcome {user.displayName}</span>
      </li>
      {!user._guest && (
        <li className="nav-item">
          <a className="nav-link" href="#" oncClick={onClick}>
            log out
          </a>
        </li>
      )}
    </ul>
  );
};

const NavBar = () => (
  <div className="navba">
    <div className="container">
      <a className="navbar-brand" href="/">
        NEW NEW
      </a>
      <ProfileNav />
    </div>
  </div>
);

export default NavBar;
