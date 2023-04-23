import "./styles/FooterSocialIcon.css"
import InstagramSvg from '../assets/instagram.svg'
import TwitterSvg from '../assets/twitter.svg'


const FooterSocialIcon = () => {
    return(
        <div className="SocialIconFlex">
            <img src={InstagramSvg} />
            <img src={TwitterSvg} />
        </div>
    );
};


export default FooterSocialIcon;