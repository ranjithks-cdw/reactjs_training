import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import BlogCard from '../../components/blogCard/BlogCard';
import Button from '../../components/button/Button';
import { BLOG_LIST, BUTTONS, INPUT_PLACEHOLDERS } from '../../constants/pageConstants';
import styles from './BlogList.module.scss';
import { modifyCurrentBlog, modifySearchTerm, retrieveBlogs } from '../../store';

/**
 * @description Method to construct BlogList component
 * @returns BlogList component
 */
const BlogList = props => {
    const dispatch = useDispatch();
    const blogListRef = useRef();
    const {showAddBlogModal, clearModal} = props;
    const {filteredBlogData, isLoad, isEditing, scrollTop} = useSelector(state => {
        return state.blogs;
    });

    const [searchValue, setSearchValue] = useState('');
    
    // Create new blog
    const createBlog = () => {
        if(isEditing) return clearModal();
        showAddBlogModal();
    };

    // Change current blog
    const updateCurrentBlog = blog => {
        if(isEditing) return clearModal();
        dispatch(modifyCurrentBlog(blog));
    };

    // Change search term
    const updateSearchTerm = event => {
        const term = event.target.value;
        setSearchValue(term);
        dispatch(modifySearchTerm(term));
    };

    // Restrict search when user is editing
    const checkEditing = () => {
        isEditing && clearModal();
    };

    // Fetch blog data
    useEffect(() => {
        dispatch(retrieveBlogs());
    },[dispatch]);
    
    const blogs = filteredBlogData.map((blog,index) => {
        blogListRef.current && scrollTop && blogListRef.current.scrollTo(0,0);
        return <BlogCard blogData={blog} key={index} updateCurrentBlog={updateCurrentBlog}/>
    });
    
    return (
        <div className={styles.blogListContainer}>
            <div className={styles.searchBar}>
                <input type='text' className={styles.search} placeholder={INPUT_PLACEHOLDERS.SEARCH} value={searchValue} onChange={updateSearchTerm} onFocus={checkEditing}/>
                <Button className="newButton" btnClickHandler={createBlog}>{BUTTONS.NEW}</Button>
            </div>
            <div className={styles.blogsContainer} ref={blogListRef}>
                {isLoad ? <PulseLoader className="loader" color='#a239a8'/> : blogs}
                {!isLoad && filteredBlogData.length <= 0 && <p className={styles.noBlogs}>{BLOG_LIST.NO_ITEMS}</p>}
            </div>
        </div>
    );
};

BlogList.propTypes = {
    clearModal: PropTypes.func,
    showAddBlogModal: PropTypes.func
};

BlogList.defaultProps = {
    clearModal: () => {},
    showAddBlogModal: () => {}
};

export default BlogList;