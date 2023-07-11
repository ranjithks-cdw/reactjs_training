import styles from './Card.module.css';

/**
 * @description Method to consrtuct card
 * @returns card
 * @author @ranjithks-cdw
 */
const Card = ({data}) => {
    const hasMoreTags = data.tags && data.tags.length > 6;
    const tags = data.tags && data.tags.slice(0,6);
    const visibleTags = tags && tags.map(tag => <li key={tag} className={styles.tags}>{tag}</li>)
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={data.picture} alt={data.name} />
            </div>
            <div className={styles.cardContent}>
                <header>
                    <h1 className={`title ${styles.userName}`}>{data.name}</h1>
                    <p className={styles.description}>{data.place}</p>
                </header>
                <main className={styles.fixedContent}>
                    <ul className={styles.tagsContainer}>
                        {visibleTags}
                        {hasMoreTags ? (
                            <li key={`more`} className={styles.tags}>...</li>
                        ) : ''}
                    </ul>
                </main>
            </div>
        </div>
    );
};

export default Card;