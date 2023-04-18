import './styles/DropDownButton.css';
import NavButton from './NavButton';
import DropDownMenu from './DropDownMenu';
import { useState } from 'react';


const HIDDEN_STATE = {display: 'none'}
const VISIBLE_STATE = {display: 'block'}

const DropDownButton = () => {

    const [menuStyle, setMenuStyle] = useState(HIDDEN_STATE)
    const changeDropDownState = () => {
        if (menuStyle === HIDDEN_STATE) {
            setMenuStyle(VISIBLE_STATE)
        } else {
            setMenuStyle(HIDDEN_STATE)
        }
    }
    return(
        <div className='ddButton'>
            <NavButton text={"Меню"} onClick={changeDropDownState}/>
            <DropDownMenu style={menuStyle} />
        </div>
    );
};

export default DropDownButton;