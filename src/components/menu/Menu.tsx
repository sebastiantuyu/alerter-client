import React, { useState } from 'react';
import './Menu.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import MenuSlot from '../menuSlot/MenuSlot';


library.add(faLeftLong);
const Menu = () => {
  
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`adl-menu ${expanded ? 'expanded' : ''}`}>
      <button className={`adl-menu-icon`} onClick={() => setExpanded(!expanded)}>
        <FontAwesomeIcon icon={faLeftLong} />
      </button>
      <MenuSlot type="title" title='SmashMedia'/>
    </div>
  )
}

export default Menu;