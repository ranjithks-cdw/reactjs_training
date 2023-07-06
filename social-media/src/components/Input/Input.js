/**
 * @description Function to create input element
 * @returns input element
 * @author @ranjithks-cdw
 */
const Input = ({inputType, inputPlaceholder, className}) => {
    return (
        <input type={inputType} placeholder={inputPlaceholder} className={className}/>
    );
};

export default Input;