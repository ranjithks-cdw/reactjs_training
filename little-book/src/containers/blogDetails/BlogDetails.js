import { blogsData } from '../../blogData';
import Button from '../../components/button/Button';
import Image from '../../components/image/Image';
import { BUTTONS } from '../../constants/pageConstants';
import styles from './BlogDetails.module.scss';
const BlogDetails = () => {
    const blogData = blogsData[1];
    const editContent = () => {

    };
    return (
        <div className={styles.detailsContainer}>
            <Image className="blogImage" src={blogData.photo} alt={blogData.title} />
            <textarea className={styles.blogTitle} value={blogData.title} />
            <textarea className={styles.details}  value={blogData.details}/>
            <Button className="editButton" btnClickHandler={editContent}>{BUTTONS.EDIT}</Button>
        </div>
    );
};

export default BlogDetails;