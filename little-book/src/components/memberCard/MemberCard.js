import PropTypes from 'prop-types';
import Image from '../image/Image';
import styles from './MemberCard.module.scss';
import { userPicAPI } from '../../constants/apiConstants';
import { FALLBACK_IMAGE } from '../../constants/pageConstants';

/**
 * @description Method to construct MemberCard component
 * @returns MemberCard Component
 */
const MemberCard = props => {
    const {name, username, photo, company} = props;
    return (
        <div className={styles.memberCard}>
            <Image src={`${userPicAPI}/${photo}`} alt={username} className="memberImage" brokenImage={FALLBACK_IMAGE.USER} />
            <p className={styles.memberName}>{name}</p>
            <p className={styles.company}>{company.name}</p>
        </div>
    )
};

MemberCard.propTypes = {
    name: PropTypes.string,
    username: PropTypes.string,
    photo: PropTypes.string,
    company: PropTypes.object,
};

MemberCard.defaultProps = {
    name: '',
    username: '',
    photo: '',
    company: ''
};

export default MemberCard;