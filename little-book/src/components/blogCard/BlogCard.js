import styles from './BlogCard.module.scss';

const BlogCard = props => {
    const {title, type, details} = props;
    const selected = '';
    return (
        <div className={`${styles.blogCard} ${selected && styles.selected}`}>
            <h6 className={styles.blogTitle}>{title}</h6>
            <p className={styles.blogType}>{type}</p>
            <p className={styles.blogDetails}>{details}</p>
        </div>
    );
};

export default BlogCard;