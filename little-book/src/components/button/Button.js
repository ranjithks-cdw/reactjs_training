import PropTypes from 'prop-types';
import styles from './Button.module.scss';
/**
 * @description Function to construct button component
 * @returns Button Component
 * @author @ranjithks-cdw
 */
const Button = (props) => {
    const {className, btnClickHandler, children} = props;

    //Method to handle click event
    const handleClick = () => {
        btnClickHandler();
    };

    return (
        <button className={styles[className]} onClick={handleClick}>{children}</button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
};

Button.defaultProps = {
    children: 'Button',
    handleClick: (event) => {}
};

export default Button;