import './styles/FooterBlock.css'


const FooterBlock = ({ children }) => {
    return(
        <div className='firstBlock'>
            {children}
        </div>
    );
};


export default FooterBlock;