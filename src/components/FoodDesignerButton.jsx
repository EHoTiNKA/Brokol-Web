import './styles/FoodDesignerButton.scss';


const FoodDesignerButton = ({ text, onClick }) => {
    return(
        <div className="FoodDesignerButton open-btn" onClick={onClick}>
            <button>{text}</button>            
        </div>
    );
};

export default FoodDesignerButton;