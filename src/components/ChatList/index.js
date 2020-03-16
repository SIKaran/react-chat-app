import React, {useState} from 'react';
import './style.scss';
import ChatItem from './ChatItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const ChatList = ({chatList, startNewChat}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {
          (chatList && chatList.length) ? (
            <>
              <h5 className="font-bold d-flex justify-content-between align-items-center w-100">
                <span>All Chats</span>
                <button className="btn btn-outline-info">
                  <FontAwesomeIcon icon={faPlus}/>
                  &nbsp;New
                </button>
              </h5>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </>
          ) : (
              <div className="no-chats">
                <p>No chats yet.</p>
                <button className="btn btn-outline-info" onClick={()=>startNewChat(true)}>
                  <FontAwesomeIcon icon={faPlus}/>
                  &nbsp;Start new chat
                </button>
              </div>
            )
        }
      </div>
      <div className="row mt-3">
        {
          chatList.map((_, i) => (
            <ChatItem key={i} currentChat={currentChat} setCurrentChat={setCurrentChat} />
          ))
        }
      </div>
    </div>
  )
}

export default ChatList;