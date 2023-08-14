import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import styles from './NewBlog.module.scss';
import { BLOG_MESSAGES, BUTTONS, FALLBACK_IMAGE, INPUT_PLACEHOLDERS, LOCAL_BLOG_TYPE, MODALS } from '../../constants/pageConstants';
import { addNewBlog } from '../../store';

/**
 * @description Method to construct a new blog modal
 * @returns NewBlog modal
 */
const NewBlog = props => {
    const titleRef = useRef();
    const detailsRef = useRef();
    const dispatch = useDispatch();

    // Create new blog
    const createBlog = () => {
        const titleContent = titleRef.current.value;
        const descContent = detailsRef.current.value;
        if(titleContent.trim().length <= 0 || titleContent.trim().length > 65 || descContent.trim().length <= 0) {
            toast.error(BLOG_MESSAGES.ERROR, {
                position: toast.POSITION.TOP_RIGHT
            })
        }
        else {
            toast.success(BLOG_MESSAGES.SUCCESS, {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(addNewBlog({title: titleContent, details: descContent, photo: FALLBACK_IMAGE.BLOG, type: LOCAL_BLOG_TYPE}));
            props.clearModal(true);
        }
    }
    return (
        <>
            <ToastContainer />
            <p className='modalTitle'>{MODALS.NEW_BLOG}</p>
            <div className={styles.inputContainer}>
                <input ref={titleRef} type='text' className={styles.blogTitle} placeholder={INPUT_PLACEHOLDERS.TITLE}/>
                <textarea ref={detailsRef} className={styles.blogDetails} placeholder={INPUT_PLACEHOLDERS.DETAILS}/>
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