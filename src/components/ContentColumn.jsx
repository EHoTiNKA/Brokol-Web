import './styles/ContentColumn.scss'

const ContentColumn = ({ children }) => {
    return(
        <div className='content'>
            {children}
        </div>
    );
};

export default ContentColumn; 