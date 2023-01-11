import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuType } from '../dtos/menu.dtos';
import './MenuSlot.css';

interface MenuSlotProps {
  type: MenuType;
  title: string;
  url?: string;
  icon?: IconDefinition;
}

const MenuSlot = ({
  type,
  title,
  url,
  icon
}: MenuSlotProps) => {


  const titleContent = () => {
    return (
      <img src="https://github.com/tuhnik/react-identicons/raw/master/img/identicon.png?raw=true" alt="" />
    )
  }

  const optionContent = () => {
    return (
      <>
        { icon ? <FontAwesomeIcon icon={icon}/> : null }
      </>
    )
  }

  return (
    <div className={'adl-menu-slot ' + type}>
        <div className={'adl-menu-slot__badge'}>
          {
            type === 'title' 
            ? titleContent()
            : optionContent()
          }
        </div>
      <div className={'adl-menu-slot__title'}>
        { title }
      </div>
    </div>
  );
}

export default MenuSlot;