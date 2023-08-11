import { useRef } from 'react'
import { SIDEBAR } from '../../constants/pageConstants';

const Checkbox = props => {
    const {label, selectorToggle} = props;
    const inputRef = useRef(null);

    const toggleSelection = () => {
        selectorToggle(inputRef?.current.checked);
    }

    return (
        <div>
            <input type="checkbox" defaultChecked={true} id={label} value={label} onChange={toggleSelection} ref={inputRef}/>
            <label htmlFor={label}>{label} {SIDEBAR.BLOGS}</label>
        </div>
    );
};

export default Checkbox;