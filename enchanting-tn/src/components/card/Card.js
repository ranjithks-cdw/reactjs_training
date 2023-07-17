import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom'
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
    const navigate = useNavigate();
    const navigateToPlace = (event) => {
        navigate(`/details/${data.city}`);
    }
    return (
        <div className={style.card}>
            <Image src={`/images/${data.city}.png`} className="cardImage" alt={data.city} />
            <div className={style.cardContent}>
                <h3>{data.place}</h3>
                <h5>{data.city}</h5>
                <p>{data.shortDescription}</p>
                <Button className={style.readMoreBtn} btnClickHandler={navigateToPlace}>{BUTTON.READ_MORE}</Button>
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