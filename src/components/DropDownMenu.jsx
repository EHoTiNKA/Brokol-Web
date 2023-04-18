import './styles/DropDownMenu.css'

const DropDownMenu = ({ style }) => {
    return(
        <div className='ddMenu' style={style}>
            <ul>
                <li>Завтрак</li>
                <li>Обед</li>
                <li>Ужин</li>
                <li>Десерт</li>
            </ul>
        </div>
    );
};

export default DropDownMenu;