import PropTypes from 'prop-types';
import styles from './Button.module.scss';

/**
 * @description Method to construct Button component
 * @returns Button Component
 */
const Button = (props) => {
    const {className, btnClickHandler, children, disabled} = props;

    //Method to handle click event
    const handleClick = () => {
        btnClickHandler();
    };

    return (
        <button className={`${styles.btn} ${styles[className]}`} onClick={handleClick} disabled={disabled}>{children}</button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    disabled: false,
    children: 'Button',
    handleClick: () => {}
};

export default Button;