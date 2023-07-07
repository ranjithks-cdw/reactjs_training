import style from './NavLinks.module.css';
/**
 * @description Function to construct navigation links component
 * @returns Navigation links
 * @author @ranjithks-cdw
 */
const NavLinks = ({navigationLinks}) => {
    const links = navigationLinks && navigationLinks.map(link => <li className={link==='New Users' ? style.active : ''}>{link}</li>);
    return (
        <ul className={style.navLinks}>
            {links}
        </ul>
    );
};

export default NavLinks;