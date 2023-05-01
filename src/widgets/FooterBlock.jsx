import './styles/FooterBlock.scss'


const FooterBlock = ({ children }) => {
    return(
        <div className='firstBlock'>
            {children}
        </div>
    );
};


export default FooterBlock;