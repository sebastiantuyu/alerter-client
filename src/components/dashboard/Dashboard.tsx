import React from 'react';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DashboardBody from './body/DashboardBody';
import './Dashboard.scss';
import DashboardHeader from './header/DashboardHeader';

const Dashboard = () => {
  return (
    <div className='adl-dashboard'>
        <button className="adl-dashboard__share">
          <FontAwesomeIcon icon={faShareFromSquare}/>
            <span>
              Share
            </span>
        </button>

        <DashboardHeader /> 
        <DashboardBody />     
    </div>
  )
}

export default Dashboard;