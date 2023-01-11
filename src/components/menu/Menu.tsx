import React from 'react';
import './Menu.css'
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core';
import { faGear, faHome, faLeftLong, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import MenuSlot from '../menuSlot/MenuSlot';
import { MenuType } from '../dtos/menu.dtos';

interface MenuSlotOptions {
  type: MenuType;
  title: string;
  url: string;
  icon: IconDefinition;
}

library.add(faLeftLong);
const Menu = () => {
  const menuOptions: MenuSlotOptions[] = [
    {
      title: 'Home',
      icon: faHome,
      url: '/home',
      type: 'option'
    },
    {
      title: 'Organization',
      icon: faPeopleGroup,
      url: '/organization',
      type: 'option'
    },
    {
      title: 'Configuration',
      icon: faGear,
      url: '/configuration',
      type: 'option'
    }
  ]

  return (
    <div className={`adl-menu expanded`}>
      {/* <button className={`adl-menu-icon`}>
        <FontAwesomeIcon icon={faLeftLong} />
      </button> */}
      <MenuSlot type="title" title='SmashMedia'/>

      <div className="adl-menu-slot-group">
        {menuOptions.map((option,id) => (
          <MenuSlot key={id} {...option} />
        ))}
      </div>
    </div>
  )
}

export default Menu;