import Checkbox from "../checkbox/Checkbox";
import styles from './Filters.module.scss';

const Filters = () => {
    const tags = ["Regional", "International", "National", "Local"];
    const toggleSelector = () => {

    }
    const filterBoxes = tags.map(tag => <Checkbox label={tag} key={tag} selectorToggle={toggleSelector}/>);
    return (
        <div className={styles.filters}>
            {filterBoxes}
        </div>
    );
};

export default Filters;