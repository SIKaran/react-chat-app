import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDotCircle} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

const ChatItem = ({currentChat, setCurrentChat}) => {
  return (
    <div className="card mb-3">
      <img src={require('../../imgs/logo.png')} className="card-img-top" alt="Thumbnail" />
      <div className="card-body">
        <div className="msg-wrapper">
          <h6 className="card-title">Card title</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p className="text-secondary m-0"><small>{moment('03-05-2010').fromNow()}</small></p>
        </div>
        <div className="card-action d-flex align-items-start justify-content-end">
          {
            <button className="btn btn-link p-0">
              <FontAwesomeIcon icon={faDotCircle} />
            </button>
          }
        </div>
      </div>
    </div>
  )
}

export default ChatItem;