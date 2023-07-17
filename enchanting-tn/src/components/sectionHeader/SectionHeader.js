import PropTypes from 'prop-types';
import style from './SectionHeader.module.scss';
/**
 * @description Method to construct section header
 * @returns section header component
 * @author @ranjithks-cdw
 */
const SectionHeader = ({sectionTitle, sectionDescription}) => {
    return (
        <header className={style.sectionHeader}>
            <h2>{sectionTitle ? sectionTitle : ''}</h2>
            <p>{sectionDescription ? sectionDescription : ''}</p>
        </header>
    )
};

SectionHeader.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    sectionDescription: PropTypes.string.isRequired
};

export default SectionHeader;