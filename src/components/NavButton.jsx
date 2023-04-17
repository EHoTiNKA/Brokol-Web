import './styles/NavButton.css';


const NavButton = ({ text }) => {
    return(
        <div className="navButton">
            <p>{text}</p>            
        </div>
    );
};

export default NavButton;