import { blogsData } from '../../blogData';
import BlogCard from '../../components/blogCard/BlogCard';
import Button from '../../components/button/Button';
import useInput from '../../components/customHooks/useInput';
import { BUTTONS, INPUT_PLACEHOLDERS } from '../../constants/pageConstants';
import styles from './BlogList.module.scss';

const BlogList = () => {
    const [searchValue, bindSearchValue, resetSearchValue] = useInput();
    const createBlog = () => {

    };

    const blogs = blogsData.map((blog,index) => <BlogCard {...blog} key={index}/>);
    return (
        <div className={styles.blogListContainer}>
            <div className={styles.searchBar}>
                <input type='text' className={styles.search} placeholder={INPUT_PLACEHOLDERS.SEARCH} {...bindSearchValue}/>
                <Button className="newButton" btnClickHandler={createBlog}>{BUTTONS.NEW}</Button>
            </div>
            <div className={styles.blogsContainer}>
                {blogs}
            </div>
        </div>
    );
};

export default BlogList;