import PropTypes from 'prop-types';
import style from './Dropdown.module.scss';
/**
 * @description Method to construct Dropdown component
 * @returns Dropdown component
 * @author @ranjithks-cdw
 */
const Dropdown = ({options, setDropdown}) => {
    const defaultValue = "Choose";
    const option = options && options.map((option,index) => <option key={index} value={option}>{option}</option>)
    return (
        <select className={style.dropdownMenu} onChange={setDropdown} >
            <option defaultValue={``} hidden>{defaultValue}</option>
            {option}
        </select>
    );
};

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    setDropdown: PropTypes.func,
};

export default Dropdown;