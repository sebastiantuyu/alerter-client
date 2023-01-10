import './MenuSlot.css';
type MenuType = 'title' | 'option';

interface MenuSlotProps {
  type: MenuType;
  title: string;
}

const MenuSlot = ({
  type,
  title,
}: MenuSlotProps) => {
  return (
    <div className={'adl-menu-slot'}>
      <div className={'adl-menu-slot__badge'}>
        <img src="https://github.com/tuhnik/react-identicons/raw/master/img/identicon.png?raw=true" alt="" />
      </div>

      <div className={'adl-menu-slot__title'}>
      { title }
      </div>
    </div>
  );
}

export default MenuSlot;