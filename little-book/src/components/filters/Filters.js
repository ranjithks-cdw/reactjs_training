import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Checkbox from "../checkbox/Checkbox";
import styles from './Filters.module.scss';
import { modifyTypes } from "../../store";

/**
 * @description Method to construct Filters Component
 * @returns Filters Component
 */
const Filters = props => {
    const dispatch = useDispatch();
    const {clearModal} = props;
    const {allBlogTypes} = useSelector(state => state.blogs);
    
    // Toggle filter types
    const toggleSelector = (value) => {
        dispatch(modifyTypes(value));
    };
    const filterBoxes = allBlogTypes.length >=0 && allBlogTypes.map(tag => <Checkbox label={tag} key={tag} selectorToggle={toggleSelector} clearModal={clearModal}/>);
    return (
        <div className={styles.filters}>
            {filterBoxes}
        </div>
    );
};

Filters.propTypes = {
    clearModal: PropTypes.func,
};

Filters.defaultProps = {
    clearModal: () => {},
};

export default Filters;