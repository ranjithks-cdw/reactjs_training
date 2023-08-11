import { BUTTONS, INPUT_PLACEHOLDERS, MODALS } from '../../constants/pageConstants';
import Button from '../button/Button';
import styles from './NewBlog.module.scss';
const NewBlog = () => {
    return (
        <div className={styles.newBlogModal}>
            <p className='modalTitle'>{MODALS.NEW_BLOG}</p>
            <div className={styles.inputContainer}>
                <input type='text' maxLength={50} className={styles.blogTitle} placeholder={INPUT_PLACEHOLDERS.TITLE}/>
                <textarea className={styles.blogDetails} placeholder={INPUT_PLACEHOLDERS.DETAILS}/>
            </div>
            <Button className="addButton" btnClickHandler={() => {}}>{BUTTONS.ADD}</Button>
        </div>
    );
};

export default NewBlog;