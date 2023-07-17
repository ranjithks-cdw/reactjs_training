import PropTypes from 'prop-types';
import style from './Button.module.scss';
/**
 * @description Function to return Button component
 * @returns Button Component
 * @author @ranjithks-cdw
 */
const Button = ({type, className, btnClickHandler, children}) => {
    const handleButton = event => {
        btnClickHandler(event);
    }
    
    return (
        <button type={type} onClick={handleButton} className={`${style.btn} ${className}`}>{children}</button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
};

Button.defaultProps = {
    type: 'button',
    btnClickHandler:(event) => {}
};

export default Button;