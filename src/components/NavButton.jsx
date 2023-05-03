import './styles/NavButton.scss';


const NavButton = ({ text, onClick }) => {
    return(
        <div className="navButton open-btn" onClick={onClick}>
            <button>{text}</button>            
        </div>
    );
};

export default NavButton;