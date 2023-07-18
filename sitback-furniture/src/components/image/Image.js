import styles from './Image.module.scss';
const Image = ({src, alt, className}) => {
    return (
        <div className={styles[className]}>
            <img src={src} alt={alt} />
        </div>
    );
};

export default Image;