import { useEffect, useState } from 'react';
import { BUTTON, ERRORS, INPUTS, LOTTERY } from '../../constants/pageConstants';
import useInput from '../customHooks/UseInput';
import Button from '../button/Button';
import styles from './Lottery.module.scss';
import { checkForPrize } from '../../services/LotteryService';

/**
 * @description Method to construct Lottery component
 * @returns Lottery Component
 */
const Lottery = () => {
    const [isLucky, setIsLucky] = useState(false);
    const [errorType, setErrorType] = useState(null);
    const [mobile, bindMobile, resetMobile] = useInput();
    const checkLottery = () => {
        if(mobile.length !== 10) return;
        const status = checkForPrize(mobile);
        resetMobile();
        if(status === ERRORS.INVALID || status === ERRORS.UNLUCKY) {
            setErrorType(status);
            setIsLucky(false);
        }
        setIsLucky(true);
    };

    useEffect(() => {
        if(errorType === ERRORS.INVALID)
            throw new Error(ERRORS.INVALID);
        if(errorType === ERRORS.UNLUCKY)
            throw new Error(ERRORS.UNLUCKY);
    },[errorType])
    return (
        <div className={styles.lotteryContainer}>
                {isLucky ?
                    <div className={styles.messageContainer}>
                        <p className={styles.message}>{LOTTERY.WON}</p>
                    </div>
                    :
                    <div className={styles.lotteryContent}>
                        <p className={styles.description}>{LOTTERY.DESCRIPTION}</p>
                        <input type="tel" className={styles.phoneNumberInput} placeholder={INPUTS.PHONE_NUMBER} {...bindMobile} maxLength={10} minLength={10}/>
                        <Button className="luckyBtn" btnClickHandler={checkLottery} disabled={mobile.length !== 10}>{BUTTON.LUCKY}</Button> 
                    </div>
                }
        </div>
    );
};

export default Lottery;