import { useRef } from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { SIDEBAR } from '../../constants/pageConstants';
import styles from './Checkbox.module.scss';

/**
 * @description Method to construct Checkbox Component
 * @returns Checkbox Component
 */
const Checkbox = props => {
    const {label, selectorToggle, clearModal} = props;
    const {isEditing} = useSelector(state => state.blogs);
    const inputRef = useRef(null);

    // Select filter
    const toggleSelection = () => {
        if(isEditing) {
            inputRef.current.checked = !inputRef.current.checked;
            return clearModal();
        }
        selectorToggle(inputRef.current.value);
    }

    return (
        <div className={styles.checkBoxGrp}>
            <input type="checkbox" defaultChecked={true} id={label} value={label} onChange={toggleSelection} ref={inputRef}/>
            <span className={styles.checkmark}></span>
            <label htmlFor={label}>{label} {SIDEBAR.BLOGS}</label>
        </div>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string,
    selectorToggle: PropTypes.func,
    clearModal: PropTypes.func,
};

Checkbox.defaultProps = {
    title: 'Label',
    selectorToggle: () => {},
    clearModal: () => {},
};

export default Checkbox;