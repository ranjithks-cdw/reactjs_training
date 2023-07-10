import PropTypes from 'prop-types';
import style from './Image.module.scss';

const Image = ({className, src, alt}) => {
    return (
        <div className={style[className]}>
            <img src={src} alt={alt} />
        </div>
    );
};

Image.propTypes = {
    className: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image;