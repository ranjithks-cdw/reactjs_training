import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BUTTON, LOGIN_PAGE, NAVIGATION_LINKS, USER_DETAILS } from '../../constants/pageConstants';
import Button from '../button/Button';
import useInput from '../customHooks/UseInput';
import styles from './LoginCard.module.scss';
import {userContext} from '../../App';
import LoginService from '../../services/LoginService';

/**
 * @description Method to construct LoginCard component
 * @returns Login Card Component
 */
const LoginCard = () => {
    const [message, setMessage] = useState(LOGIN_PAGE.DESCRIPTION);
    const [email, bindEmail, resetEmail] = useInput();
    const [password, bindPassword, resetPassword] = useInput();
    const {setUserDetails} = useContext(userContext);
    const navigate = useNavigate();

    // Method to validate user
    const validateUser = () => {
        if(LoginService(email,password)) {
            setUserDetails({isLoggedIn: true, name:USER_DETAILS.NAME});
            navigate(NAVIGATION_LINKS[0].URL);
        }
        else {
            setMessage(LOGIN_PAGE.ERROR_MESSAGE);
        }
        resetEmail();
        resetPassword();
    }

    return (
        <div className={styles.loginCard}>
            <p className={styles.loginTitle}>{LOGIN_PAGE.TITLE}</p>
            <p className={styles.loginDescription}>{message}</p>
            <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>{LOGIN_PAGE.EMAIL}</label>
                <input type="email" className={styles.input} {...bindEmail} autoFocus/>
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>{LOGIN_PAGE.PASSWORD}</label>
                <input type="password" className={styles.input} {...bindPassword}/>
            </div>
            <Button className="login" btnClickHandler={validateUser}>{BUTTON.LOGIN}</Button>
        </div>
    );
};

export default LoginCard;