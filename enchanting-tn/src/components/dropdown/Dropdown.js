import PropTypes from 'prop-types';
import style from './Dropdown.module.scss';
/**
 * @description Method to construct Dropdown component
 * @returns Dropdown component
 * @author @ranjithks-cdw
 */
const Dropdown = ({options, dropdownPlace, homeTownSelection, destinationSelection}) => {
    const defaultValue = "Choose";
    const setDropdownPlace = event => {
        if(dropdownPlace)
            dropdownPlace(event.target.value);
        else if(homeTownSelection)
            homeTownSelection(event.target.value);
        else
            destinationSelection(event.target.value);
    };
    const option = options && options.map((option,index) => <option key={index} value={option}>{option}</option>)
    return (
        <select className={style.dropdownMenu} onChange={setDropdownPlace} >
            <option defaultValue={``} hidden>{defaultValue}</option>
            {option}
        </select>
    );
};

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    dropdownMenuPlace: PropTypes.func,
    homeTownSelection: PropTypes.func,
    destinationSelection: PropTypes.func
};

export default Dropdown;