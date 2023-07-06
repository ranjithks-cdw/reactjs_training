import style from './NavLinks.module.css';
/**
 * @description Function to construct navigation links component
 * @returns Navigation links
 * @author @ranjithks-cdw
 */
const NavLinks = ({navigationLinks}) => {
    const links = navigationLinks.map(link => <li>{link}</li>);
    return (
        <ul className={style.navLinks}>
            {links}
        </ul>
    );
};

export default NavLinks;