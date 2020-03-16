import React from 'react';
import './style.scss';

const ChatDetails = ({currentChat, ifMobile}) => {
  return (
    <div className={`container-fluid model${ifMobile?' mobile':''}`}>Chat Details</div>
  )
}
export default ChatDetails;
