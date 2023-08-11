import { MODALS } from '../../constants/pageConstants';
import { usersData } from '../../usersData';
import MemberCard from '../memberCard/MemberCard';
import styles from './MembersList.module.scss';
const MembersList = () => {
    const usersDataList = usersData.map(user => <MemberCard {...user} key={user.id}/>);
    return (
        <div className={styles.membersModal}>
            <p className="modalTitle">{MODALS.MEMBERS_TITLE}</p>
            <div className={styles.membersContainer}>
                {usersDataList}
            </div>
        </div>
    );
};

export default MembersList;