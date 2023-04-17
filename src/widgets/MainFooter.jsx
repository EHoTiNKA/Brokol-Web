import './styles/MainFooter.css'
import ContentColumn from "../components/ContentColumn";
import BrandIconWhite from '../components/BrandIconWhite';


const MainFooter = () => {
    return(
        <div className='footer'>
            <ContentColumn>
                <div>
                    <BrandIconWhite />
                </div>
            </ContentColumn>
        </div>
    );
};


export default MainFooter