import './styles/DropDownButton.css';
import NavButton from './NavButton';
import DropDownMenu from './DropDownMenu';
import { useState } from 'react';


HIDDEN_STATE = {display: 'none'}

const DropDownButton = () => {

    const [menuStyle, setMenuStyle] = useState(HIDDEN_STATE)
    return(
        <div className='ddButton'>
            <NavButton text={"Меню"}/>
            <DropDownMenu style={menuStyle} />
        </div>
    );
};

export default DropDownButton;