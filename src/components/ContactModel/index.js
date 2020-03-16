import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const ContactModel = ({select = true, startNewChat}) => {
  return (
    <div className={`container-fluid contact-model model`}>
      <ul className="nav justify-content-between">
        <li className="nav-item text-light" onClick={() => startNewChat(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />&nbsp;
          <span>{(select ? 'Select' : '')} Contact</span>
        </li>
      </ul>
      <ul className="list-group list-group-flush bg-dark">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  )
}

export default ContactModel;