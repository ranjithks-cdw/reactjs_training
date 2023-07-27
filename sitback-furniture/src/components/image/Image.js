import PropTypes from 'prop-types';
import styles from './Image.module.scss';
import { BROKEN_IMAGE_URL } from '../../constants/pageConstants';
/**
 * @description Function to create Image component
 * @returns Image component
 * @author @ranjithks-cdw
 */
const Image = (props) => {
    const {src, alt, className} = props;
    const handleBrokenImage = error => {
        error.target.src = BROKEN_IMAGE_URL;
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
};

Image.defaultProps = {
    src: '',
    alt: 'image',
    className: 'image'
};

export default Image;