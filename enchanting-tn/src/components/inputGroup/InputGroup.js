import style from './InputGroup.module.scss';
const InputGroup = ({children}) => {
    return (
        <div className={style.inputGroup}>
            {children}
        </div>
    );
};

export default InputGroup;