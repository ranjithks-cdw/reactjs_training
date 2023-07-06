import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import NavLinks from '../NavLinks/NavLinks';
import Title from '../Title/Title';
import SearchUsers from '../SearchUsers/SearchUsers';

import style from './PageHeader.module.css';
import {pageConstants} from '../../constants/pageConstants';

/**
 * @description Function to construct page header
 * @returns Page header
 * @author @ranjithks-cdw
 */
const PageHeader = () => {
    const isPageTitle = true;
    const navigationLinks = pageConstants.navigationLinks;
    return (
        <Header className={ `${style.marginTop} ${style.grid}`}>
            <Title isPageTitle = {isPageTitle}>{pageConstants.pageTitle}</Title>
            <Navigation>
                <SearchUsers />
                <NavLinks navigationLinks={navigationLinks}/>
            </Navigation>
        </Header>
    );
};

export default PageHeader;