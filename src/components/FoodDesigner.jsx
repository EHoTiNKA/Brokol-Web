import './styles/FoodDesigner.scss';


const FoodDesigner = ({ text, onClick }) => {
    return(
        <div className="FoodDesignerButton open-btn" onClick={onClick}>
            <button>{text}</button>            
        </div>
    );
};

export default FoodDesigner;