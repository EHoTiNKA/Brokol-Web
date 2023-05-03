import './styles/DropDownMenu.scss'

const DropDownMenu = () => {
    return(
        <div className='ddMenu'>
            <ul>
                <li><a id='Завтрак'>Завтрак</a></li>
                <li><a id='Обед'>Обед</a></li>
                <li><a id='Ужин'>Ужин</a></li>
                <li><a id='Десерт'>Десерт</a></li>
            </ul> 
        </div>
    ); 
};

export default DropDownMenu;