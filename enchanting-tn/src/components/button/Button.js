import PropTypes from 'prop-types';
import style from './Button.module.scss';
/**
 * @description Function to return Button component
 * @returns Button Component
 * @author @ranjithks-cdw
 */
const Button = ({className, onClick, children}) => {
    return (
        <button onClick={onClick} className={`${style.btn} ${className}`}>{children}</button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
};

export default Button;