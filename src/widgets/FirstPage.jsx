import './styles/FirstPage.scss';
import Header from './Header';
import FirstMainBody from './FirstMainBody';
import MainFooter from './MainFooter';


const FirstPage = () => {
    return(
        <div>
            <Header/>
            <FirstMainBody/>
            <MainFooter/>
        </div>
        
    );
};

export default FirstPage;