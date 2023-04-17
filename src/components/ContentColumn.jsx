import './styles/ContentColumn.css'

const ContentColumn = ({ children }) => {
    return(
        <div className='content'>
            {children}
        </div>
    );
};

export default ContentColumn;