import Navigation from '../navigation/Navigation';

import SearchUsers from '../searchUsers/SearchUsers';

import style from './PageHeader.module.css';
import {pageConstants} from '../../constants/pageConstants';
import NavLinks from '../navLinks/NavLinks';

/**
 * @description Function to construct page header
 * @returns Page header
 * @author @ranjithks-cdw
 */
const PageHeader = () => {
    const navigationLinks = pageConstants.navigationLinks;
    return (
        <header className={ `${style.marginTop} ${style.grid}`}>
            <h1 className={`title ${style.pageTitle}`}>{pageConstants.pageTitle}</h1>
            <Navigation>
                <SearchUsers />
                <NavLinks navigationLinks={navigationLinks}/>
            </Navigation>
        </header>
    );
};

export default PageHeader;