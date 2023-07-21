import PropTypes from 'prop-types';
import styles from './Image.module.scss';
/**
 * @description Function to create Image component
 * @returns Image component
 * @author @ranjithks-cdw
 */
const Image = ({src, alt, className}) => {
    return (
        <div className={styles[className]}>
            <img src={src} alt={alt} />
        </div>
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
}

export default Image;