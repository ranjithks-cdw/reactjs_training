import styles from './Button.module.scss';

const Button = ({className, btnClickHandler, children}) => {
    const handleClick = () => {
        btnClickHandler();
    };

    return (
        <button className={`${styles.btn} ${styles[className]}`} onClick={handleClick}>{children}</button>
    );
};

export default Button;