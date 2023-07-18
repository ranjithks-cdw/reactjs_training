const Button = ({className, btnClickHandler, children}) => {
    const handleClick = () => {
        btnClickHandler();
    };

    return (
        <button className={className} onClick={handleClick}>{children}</button>
    );
};

export default Button;