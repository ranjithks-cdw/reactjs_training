import PropTypes from 'prop-types';
import style from './InputGroup.module.scss';
/**
 * @description Function to create InputGroup component
 * @returns Input group component
 * @author @ranjithks-cdw
 */
const InputGroup = ({children}) => {
    return (
        <div className={style.inputGroup}>
            {children}
        </div>
    );
};

InputGroup.propTypes = {
    children: PropTypes.array.isRequired,
}

export default InputGroup;