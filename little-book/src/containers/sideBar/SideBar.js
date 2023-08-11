import Filters from '../../components/filters/Filters';
import { logoSplitter } from '../../utils/logoHelper';
import { LOGO, SIDEBAR } from '../../constants/pageConstants';
import styles from './SideBar.module.scss';
const SideBar = () => {
    const title = logoSplitter(LOGO);
    return (
        <aside className={styles.sidebarContainer}>
            <h1 className={styles.title}>
                {title[0]} <span className={styles.strong}>{title[1]}</span>
            </h1>
            <div className={styles.filter}>
                <p className={styles.filterTitle}>{SIDEBAR.FILTER}</p>
                <Filters />
            </div>
            <div className={styles.utilityContainer}>
                <p className={styles.members}>{SIDEBAR.VIEW_MEMBERS}</p>
                <p className={styles.switch}>{SIDEBAR.SWITCH}</p>
            </div>
        </aside>
    );
};

export default SideBar;