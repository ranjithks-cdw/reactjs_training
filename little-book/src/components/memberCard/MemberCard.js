import { FALLBACK_IMAGE } from '../../constants/pageConstants';
import Image from '../image/Image';
import styles from './MemberCard.module.scss';
const MemberCard = props => {
    const {name, username, photo, company} = props;
    return (
        <div className={styles.memberCard}>
            <Image src={photo} alt={username} className="memberImage" brokenImage={FALLBACK_IMAGE.USER} />
            <p className={styles.memberName}>{name}</p>
            <p className={styles.company}>{company.name}</p>
        </div>
    )
};

export default MemberCard;