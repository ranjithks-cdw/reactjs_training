import PropTypes from 'prop-types';
import MemberCard from '../memberCard/MemberCard';
import styles from './MembersList.module.scss';
import { MODALS } from '../../constants/pageConstants';

/**
 * @description Method to construct MembersList component
 * @returns MembersList component
 */
const MembersList = props => {
    const {membersData} = props;
    const usersDataList = membersData?.map(user => <MemberCard {...user} key={user.id}/>);
    return (
        <>
            <p className="modalTitle">{MODALS.MEMBERS}</p>
            <div className={styles.membersContainer}>
                {usersDataList}
            </div>
        </>
    );
};

MembersList.propTypes = {
    membersData: PropTypes.array
};

MembersList.defaultProps = {
    membersData: [],
};

export default MembersList;