import PropTypes from 'prop-types';
import styles from './Image.module.scss';
import { FALLBACK_IMAGE } from '../../constants/pageConstants';
/**
 * @description Function to create Image component
 * @returns Image component
 * @author @ranjithks-cdw
 */
const Image = (props) => {
    const {src, alt, className, brokenImage} = props;
    const handleBrokenImage = error => {
        error.target.src = brokenImage;
    };
    return (
        <div className={styles[className]}>
            <img src={src} alt={alt} onError={handleBrokenImage}/>
        </div>
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    brokenImage: PropTypes.string
};

Image.defaultProps = {
    src: '',
    alt: 'image',
    className: 'image',
    brokenImage: FALLBACK_IMAGE.BLOG
};

export default Image;