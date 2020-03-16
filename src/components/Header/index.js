import React, {useState} from "react";
import "./style.scss";
import {Stories} from "./Stories";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCog} from '@fortawesome/free-solid-svg-icons';
import logo from '../../imgs/logo.png';

const Header = ({toggleState = false, setNavToggle, setAccMenuToggle, accMenuToggle, ifMobile, statusList}) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark align-items-center justify-content-between${ifMobile ? ' fixed-bottom' : ''}`}
      style={ifMobile ? {minHeight: '4rem', padding: '0 1rem'} : {}}>
      <button className={`navbar-toggler p-0 border-0${toggleState ? ' collapsed' : ''}`}
        style={ifMobile ? {width: '20%'} : {}}
        type="button" aria-label="Toggle navigation"
        onClick={() => {
          setNavToggle(!toggleState);
        }}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse menu show${accMenuToggle ? ' show' : ''}`} id="navbarNav">
        <ul className="navbar-nav align-items-center"
          style={ifMobile ? {justifyContent: 'space-around'} : {}}>
          <li className="nav-item active">
            <a className="nav-link story" href="#">
              <FontAwesomeIcon icon={faBell} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link story" href="#">
              <FontAwesomeIcon icon={faCog} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link story m-0" href="#">
              <img src={logo} />
            </a>
          </li>
        </ul>
      </div>
      <Stories navToggle={toggleState} ifMobile={ifMobile} statusList={statusList} />
    </nav>
  );
};

export default Header;
