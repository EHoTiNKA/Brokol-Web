import './styles/FirstPage.scss';
import HeaderFirstPage from './HeaderFirstPage';
import FirstMainBody from './FirstMainBody';
import MainFooter from './MainFooter';



const FirstPage = () => {
    return(
        <div>
            <HeaderFirstPage/>
            <FirstMainBody/>
            <MainFooter/>
        </div>
        
    );
};

export default FirstPage;