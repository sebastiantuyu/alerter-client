import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='adl-dashboard'>
      <div className="adl-dashboard__title">
        Dashboard
      </div>

      <button>
        <FontAwesomeIcon icon={faShareFromSquare}/>
        Share
      </button>      
    </div>
  )
}

export default Dashboard;