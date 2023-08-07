import PropTypes from 'prop-types';
import styles from './Button.module.scss';

/**
 * @description Method to construct Button component
 * @returns Button Component
 */
const Button = (props) => {
    const {className, btnClickHandler, children} = props;

    //Method to handle click event
    const handleClick = () => {
        btnClickHandler();
    };

    return (
        <button className={`${styles.btn} ${styles[className]}`} onClick={handleClick}>{children}</button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
};

Button.defaultProps = {
    children: 'Button',
    handleClick: () => {}
};

export default Button;