import React from "react";
import "./style.scss";
import logo from "../../imgs/logo.png";

const SideMenu = ({navToggle, setNavToggle}) => (
  <div className={`side-menu-wrapper${navToggle ? ' active' : ''}`} 
    onClick={()=>setNavToggle(!navToggle)}>
    <div className="side-menu" onClick={(e)=>e.stopPropagation()}>
      <div className="logo-wrapper">
        <img src={logo} className="logo" />
        <p>Brand</p>
      </div>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action active">
          Chat
      </a>
        <a href="#" className="list-group-item list-group-item-action">
          Documents
      </a>
        <a href="#" className="list-group-item list-group-item-action">
          Discover
      </a>
        <a href="#" className="list-group-item list-group-item-action">
          Calendar
      </a>
        <a href="#" className="list-group-item list-group-item-action">
          Settings
      </a>
      </div>
      <div className="list-group footer">
        <a href="#" className="list-group-item list-group-item-action">
          Sign out
      </a>
      </div>
    </div>
  </div>
);

export default SideMenu;
