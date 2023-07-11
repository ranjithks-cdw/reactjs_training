import {Link} from 'react-router-dom'
import Button from '../button/Button';
import Image from '../image/Image';
import style from './Card.module.scss';
const Card = ({data}) => {
    const imageURL = require(`../../assets/${data.city}.png`);
    return (
        <div className={style.card}>
            <Image src={imageURL} className="cardImage" alt={data.city} />
            <div className={style.cardContent}>
                <h3>{data.place}</h3>
                <h5>{data.city}</h5>
                <p>{data.shortDescription}</p>
                <Link to={`/details/${data.city}`}>
                    <Button className={style.readMoreBtn}>Read More</Button>
                </Link>
            </div>
        </div>
    );
};

export default Card;