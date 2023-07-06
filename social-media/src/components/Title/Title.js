import styles from './Title.module.css';

/**
 * @description Function to create Title component
 * @returns Title component
 * @author @ranjithks-cdw
 */
const Title = ({isPageTitle, children}) => {
    return <h1 className={isPageTitle ? styles.pageTitle : styles.cardTitle}>{children}</h1>;
};

export default Title;