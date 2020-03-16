import React, {useState} from 'react';
import './scss/style.scss';
import SideMenu from './components/SideMenu/';
import Header from './components/Header';
import ChatList from './components/ChatList';
import ChatDetails from './components/ChatDetails';
import ContactModel from './components/ContactModel';

const checkMobileDevice = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const App = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [accMenuToggle, setAccMenuToggle] = useState(false);
  const [ifMobile, setIfMobile] = useState(checkMobileDevice());

  const [currentChat, setCurrentChat] = useState(null);
  const [chatList, setChatList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [contactModelOpen, startNewChat] = useState(false);

  window.addEventListener('resize', () => setIfMobile(checkMobileDevice()));

  return (
    <div className="container-fluid" style={navToggle ? {overflow: 'hidden', position: 'fixed'} : {}}>
      <Header
        toggleState={navToggle}
        ifMobile={ifMobile}
        setNavToggle={(state) => setNavToggle(state)}
        accMenuToggle={accMenuToggle}
        setAccMenuToggle={(state) => setAccMenuToggle(state)}
        statusList={statusList}
      />
      <SideMenu navToggle={navToggle} setNavToggle={(toggleState) => setNavToggle(toggleState)} />
      <div className={`container-fluid chat-list${ifMobile ? ' mobile' : ''}`}>
        <div className="row">
          <div className="col col-12 col-sm-6">
            <ChatList
              chatList={chatList}
              currentChat={currentChat}
              setCurrentChat={setCurrentChat}
              startNewChat={(flag) => startNewChat(flag)} />
          </div>
          {
            currentChat && (
              <div className="col col-12 col-sm-6">
                <ChatDetails currentChat={currentChat} ifMobile={ifMobile} />
              </div>
            )
          }
        </div>
      </div>
      {
        contactModelOpen && (
          <ContactModel
            startNewChat={(flag) => startNewChat(flag)}
          />
        )
      }
    </div>
  );
}

export default App;