import './styles/NavButton.css';


const NavButton = ({ text, onClick }) => {
    return(
        <div type='button' className="navButton btn btn-primary" data-toggle='modal' data-target='#exampleModal' onClick={onClick}>
            <p>{text}</p>            
        </div>
    );
};

export default NavButton;