import React from 'react';
import logo from '../../imgs/logo.png';
import './style.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

export const Stories = ({ ifMobile, statusList }) => {
  return (
    <div className={`story-wrapper${ifMobile?' mobile':''}`}>
      <div className="stories pb-2 pl-2">
        {
          new Array(8).fill('').map((_, index) => (
            <div className="story" key={index}>
              <img src={logo} />
            </div>
          ))
        }
      </div>
      <div className="story ml-2">
        <button className="btn btn-link more-stories-btn">
          <FontAwesomeIcon icon={faEllipsisH}/>
        </button>
      </div>
      <p className="m-0" style={ifMobile?{top:'0'}:{}}>Stories of your friends</p>
    </div>
  )
}
