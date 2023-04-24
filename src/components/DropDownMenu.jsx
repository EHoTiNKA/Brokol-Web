import './styles/DropDownMenu.css'

const DropDownMenu = () => {
    return(
        <div className='ddMenu'>
            <ul>
                <li><a>Завтрак</a></li>
                <li><a>Обед</a></li>
                <li><a>Ужин</a></li>
                <li><a>Десерт</a></li>
            </ul> 
        </div>
    ); 
};

export default DropDownMenu;