import { useContext } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Filters from '../../components/filters/Filters';
import { LOGO, SIDEBAR } from '../../constants/pageConstants';
import styles from './SideBar.module.scss';
import { logoSplitter } from '../../utils/logoHelper';
import { ThemeContext } from '../../App';

/**
 * @description Method to construct Sidebar Component
 * @returns Sidebar Component
 */
const SideBar = props => {
    const {showMembers, clearModal} = props;
    const {isEditing} = useSelector(state => state.blogs);
    const title = logoSplitter(LOGO);
    const {theme, toggleTheme} = useContext(ThemeContext);

    // Method to change theme
    const changeTheme = () => {
        toggleTheme();
    };
    
    // Method to show members
    const displayMembers = () => {
        isEditing ? clearModal(): showMembers();
    };
    return (
        <aside className={styles.sidebarContainer}>
            <h1 className={styles.title}>
                {title[0]} <span className={styles.strong}>{title[1]}</span>
            </h1>
            <div className={styles.filter}>
                <p className={styles.filterTitle}>{SIDEBAR.FILTER}</p>
                <Filters clearModal={clearModal}/>
            </div>
            <div className={styles.utilityContainer}>
                <p className={styles.members} onClick={displayMembers}>{SIDEBAR.VIEW_MEMBERS}</p>
                <p className={styles.switch} onClick={changeTheme}>{theme === 'light' ? SIDEBAR.SWITCH_DARK : SIDEBAR.SWITCH_LIGHT}</p>
            </div>
        </aside>
    );
};

SideBar.propTypes = {
    showMembers: PropTypes.func,
    clearModal: PropTypes.func
};

SideBar.defaultProps = {
    clearModal: () => {},
    showMembers: () => {}
};

export default SideBar;