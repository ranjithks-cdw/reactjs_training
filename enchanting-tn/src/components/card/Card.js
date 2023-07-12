import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Button from '../button/Button';
import Image from '../image/Image';
import style from './Card.module.scss';
import {BUTTON} from '../../constants/pageConstants';
/**
 * @description Function to return Card component
 * @returns Card component
 * @author @ranjithks-cdw
*/
const Card = ({data}) => {
    const imageURL = data && data.city && require(`../../assets/${data.city}.png`);
    return (
        <div className={style.card}>
            <Image src={imageURL} className="cardImage" alt={data.city} />
            <div className={style.cardContent}>
                <h3>{data.place}</h3>
                <h5>{data.city}</h5>
                <p>{data.shortDescription}</p>
                <Link to={`/details/${data.city}`}>
                    <Button className={style.readMoreBtn}>{BUTTON.READ_MORE}</Button>
                </Link>
            </div>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.shape({
        city: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;