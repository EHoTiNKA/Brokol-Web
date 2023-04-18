import './styles/NavButton.css';


const NavButton = ({ text, onClick }) => {
    return(
        <div className="navButton" onClick={onClick}>
            <p>{text}</p>            
        </div>
    );
};

export default NavButton;