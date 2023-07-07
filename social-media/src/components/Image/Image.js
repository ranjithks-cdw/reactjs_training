import styles from './Image.module.css';
/**
 * @description Method to construct Image component
 * @returns Image component
 * @author @ranjithks-cdw
 */
const Image = ({src, alt}) => {
    return (
        <div className={styles.imageContainer}>
            <img src={src} alt={alt} />
        </div>
    );
};

export default Image;