import style from './SectionHeader.module.scss';
const SectionHeader = ({sectionTitle, sectionDescription}) => {
    return (
        <header className={style.sectionHeader}>
            <h2>{sectionTitle ? sectionTitle : ''}</h2>
            <p>{sectionDescription ? sectionDescription : ''}</p>
        </header>
    )
};

export default SectionHeader;