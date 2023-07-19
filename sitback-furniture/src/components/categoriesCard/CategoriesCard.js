import {useNavigate} from 'react-router-dom';
import Button from '../button/Button';
import Image from '../image/Image';
import styles from './CategoriesCard.module.scss';
import { BUTTON } from '../../constants/pageConstants';
const CategoriesCard = ({data}) => {
    const navigate = useNavigate();
    const navigateToCategory = (event) => {
        navigate(`/categories/${data.id}`);
    }
    return (
        <div className={styles.card}>
            <Image className='categoryImage' src={data.photo} alt={data.category} />
            <h2 className={styles.categoryTitle}>{data.category}</h2>
            <p className={styles.description}>{data.description}</p>
            <Button className="shopNow" btnClickHandler={navigateToCategory}>{BUTTON.SHOP_NOW}</Button>
        </div>
    );
};

export default CategoriesCard;