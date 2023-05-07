import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Search.scss'
import MagnifyingGlassSolid from '../assets/magnifying-glass-solid.svg'

const Search = () => {
    return(
        <div className="mainSearch">
            <input type='text' placeholder='Поиск позиций' />
            <img src={MagnifyingGlassSolid} className='glassSolid' />
        </div>
    );
};

export default Search; 