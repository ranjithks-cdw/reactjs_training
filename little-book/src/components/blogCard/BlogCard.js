import PropTypes from 'prop-types';
import styles from './BlogCard.module.scss';

/**
 * @description Method to construct BlogCard Module
 * @returns BlogCard Component
 */
const BlogCard = props => {
    const {title, type, details, selected} = props.blogData;
    const {updateCurrentBlog} = props;

    // Method to select blog
    const selectCurrentBlog = () => {
        updateCurrentBlog(props.blogData);
    };
    return (
        <div className={`${styles.blogCard} ${selected && styles.selected}`} onClick={selectCurrentBlog}>
            <h6 className={styles.blogTitle}>{title}</h6>
            <p className={styles.blogType}>{type}</p>
            <p className={styles.blogDetails}>{details}</p>
        </div>
    );
};

BlogCard.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    details: PropTypes.string,
    selected: PropTypes.bool
};

BlogCard.defaultProps = {
    title: '',
    type: '',
    details: '',
    selected: false
};

export default BlogCard;