import styles from './Card.module.css';
import Image from '../Image/Image';
import Header from '../Header/Header';
import Title from '../Title/Title';
import Main from '../Main/Main';

const Card = ({data}) => {
    const hasMoreTags = data.tags && data.tags.length > 6;
    const tags = data.tags && data.tags.slice(0,6);
    const visibleTags = tags && tags.map(tag => <li className={styles.tags}>{tag}</li>)
    return (
        <div className={styles.card}>
            <Image src={data.picture} alt={data.name} />
            <div className={styles.cardContent}>
                <Header>
                    <Title isPageTitle={false}>{data.name}</Title>
                    <p className={styles.description}>{data.place}</p>
                </Header>
                <Main className={styles.fixedContent}>
                    <ul className={styles.tagsContainer}>
                        {visibleTags}
                        {hasMoreTags ? (
                            <li className={styles.tags}>...</li>
                        ) : ''}
                        {/* <li className={styles.tags></li> */}
                    </ul>
                </Main>
            </div>
        </div>
    );
};

export default Card;