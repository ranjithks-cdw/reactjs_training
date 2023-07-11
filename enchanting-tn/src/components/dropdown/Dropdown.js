import style from './Dropdown.module.scss';
const Dropdown = ({options}) => {
    const option = options && options.map((option,index) => <option key={index} value={option}>{option}</option>)
    return (
        <select className={style.dropdownMenu}>
            <option value="" disabled selected hidden>Choose</option>
            {option}
        </select>
    );
};

export default Dropdown;