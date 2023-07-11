import style from './Button.module.scss';
const Button = ({className, children}) => {
    return (
        <button className={`${style.btn} ${className}`}>{children}</button>
    );
};

export default Button;