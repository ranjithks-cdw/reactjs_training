import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/button/Button';
import Image from '../../components/image/Image';
import { BLOG_MESSAGES, BUTTONS } from '../../constants/pageConstants';
import styles from './BlogDetails.module.scss';
import { modifyBlogDetails, modifyEditStatus } from '../../store';

/**
 * @description Method to construct BlogDetails component
 * @returns BlogDetails component
 */
const BlogDetails = () => {
    const dispatch = useDispatch();
    const titleRef = useRef();
    const descRef = useRef();
    const {currentBlog, isLoad, isEditing} = useSelector(state => {
        return state.blogs;
    });

    // Start editing the blog
    const editContent = useCallback(() => {
        dispatch(modifyEditStatus(true));
    },[dispatch]);

    // Save the blog after editing
    const saveContent = () => {
        const titleContent = titleRef.current.value;
        const descContent = descRef.current.value;
        if(titleContent.trim().length <= 0 || titleContent.trim().length > 65 || descContent.trim().length <= 0) {
            toast.error(BLOG_MESSAGES.ERROR, {
                position: toast.POSITION.TOP_RIGHT
            })
        }
        else {
            toast.success(BLOG_MESSAGES.SUCCESS, {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(modifyBlogDetails({title: titleContent, details: descContent}));
        }
    };

    // Cancel Editing
    const cancelEditing = () => {
        dispatch(modifyEditStatus(false));
    }

    return (
        <article className={styles.detailsContainer}>
            <ToastContainer />
            {isLoad || !currentBlog? <PulseLoader className="loader" color='#a239a8'/>
                :
                <>
                    <Image className="blogImage" src={currentBlog.photo} alt={currentBlog.title} />
                    <textarea ref={titleRef} className={styles.blogTitle} value={isEditing ? undefined : currentBlog.title} readOnly={!isEditing}/>
                    <textarea ref={descRef} className={styles.details}  value={isEditing ? undefined : currentBlog.details} readOnly={!isEditing}/>
                    {!isEditing && <Button className="editButton" btnClickHandler={editContent}>{BUTTONS.EDIT}</Button>}
                    {isEditing && 
                        <div className={styles.buttonContainer}>
                            <Button className="cancelButton" btnClickHandler={cancelEditing}>{BUTTONS.CANCEL}</Button>
                            <Button className="saveButton" btnClickHandler={saveContent}>{BUTTONS.SAVE}</Button>
                        </div>
                    }
                </>
            }
        </article>
    );
};

export default BlogDetails;