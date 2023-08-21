import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import styles from './NewBlog.module.scss';
import { BLOG_MESSAGES, BUTTONS, FALLBACK_IMAGE, INPUT_PLACEHOLDERS, LOCAL_BLOG_TYPE, MODALS } from '../../constants/pageConstants';
import { addNewBlog, modifyEditStatus } from '../../store';

/**
 * @description Method to construct a new blog modal
 * @returns NewBlog modal
 */
const NewBlog = props => {
    const titleRef = useRef();
    const detailsRef = useRef();
    const dispatch = useDispatch();

    const {blogData} = useSelector(state => {
        return state.blogs;
    });

    // Create new blog
    const createBlog = () => {
        const titleContent = titleRef.current.value.trim();
        const descContent = detailsRef.current.value.trim();
        if(titleContent.length <= 0 || titleContent.length > 65 || descContent.length <= 0) {
            toast.error(BLOG_MESSAGES.ERROR, {
                position: toast.POSITION.TOP_RIGHT
            });
        } else if (blogData.some(blog => blog.title === titleContent)) {
            toast.error(BLOG_MESSAGES.DUPLICATE_TITLE, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            toast.success(BLOG_MESSAGES.SUCCESS, {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(addNewBlog({title: titleContent, details: descContent, photo: FALLBACK_IMAGE.BLOG, type: LOCAL_BLOG_TYPE}));
            props.clearModal(true);
        }
    };

    // Modify editing status if user is editing
    const changeEditStatus = useCallback(() => {
        const titleContent = titleRef.current.value.trim();
        const descContent = detailsRef.current.value.trim();
        if(titleContent.length > 0 || descContent.length > 0) {
            dispatch(modifyEditStatus(true));
        }
        else {
            dispatch(modifyEditStatus(false));
        }
    },[]);

    return (
        <>
            <ToastContainer />
            <p className='modalTitle'>{MODALS.NEW_BLOG}</p>
            <div className={styles.inputContainer}>
                <input ref={titleRef} type='text' className={styles.blogTitle} placeholder={INPUT_PLACEHOLDERS.TITLE} onChange={changeEditStatus}/>
                <textarea ref={detailsRef} className={styles.blogDetails} placeholder={INPUT_PLACEHOLDERS.DETAILS} onChange={changeEditStatus}/>
            </div>
            <Button className="addButton" btnClickHandler={createBlog}>{BUTTONS.ADD}</Button>
        </>
    );
};

NewBlog.propTypes = {
    clearModal: PropTypes.func,
};

NewBlog.defaultProps = {
    clearModal: () => {}
};

export default NewBlog;