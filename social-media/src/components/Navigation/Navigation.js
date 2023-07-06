import style from './Navigation.module.css';
/**
 * @description Function to create navigation component
 * @returns Navigation component
 * @author @ranjithks-cdw
 */
const Navigation = ({children}) => {
    return (
        <nav className={style.flex}>
            {children}
        </nav>
    );
};

export default Navigation;