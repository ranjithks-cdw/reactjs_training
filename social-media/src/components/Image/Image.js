import styles from './Image.module.css';
const Image = ({src, alt}) => {
    return (
        <div className={styles.imageContainer}>
            <img src={src} alt={alt} />
        </div>
    );
};

export default Image;