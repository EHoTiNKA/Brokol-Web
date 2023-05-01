import './styles/NavButton.scss';


const NavButton = ({ text, onClick }) => {
    return(
        <div className="navButton open-btn" onClick={onClick}>
            <p>{text}</p>            
        </div>
    );
};

export default NavButton;