import PropTypes from 'prop-types';
import Button from '../button/Button';
import { BUTTONS, MODALS } from '../../constants/pageConstants';
import styles from './WarningModal.module.scss';

/**
 * @description Method to construct Warning Modal
 * @returns Warning Modal
 */
const WarningModal = props => {
    // On click of continue
    const continueHandler = () => {
        props.continueHandler();
    };

    // On click of cancel
    const cancelHandler = () => {
        props.cancelHandler();
    }

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalContent}>
                <p className={styles.modalTitle}>{MODALS.WARNING}</p>
                <div className={styles.buttonsContainer}>
                    <Button className="cancelButton" btnClickHandler={cancelHandler}>{BUTTONS.CANCEL}</Button>
                    <Button className="continueButton" btnClickHandler={continueHandler}>{BUTTONS.CONTINUE}</Button>
                </div>
            </div>
        </div>
    );
};

WarningModal.propTypes = {
    continueHandler: PropTypes.func,
    cancelHandler: PropTypes.func,
};

WarningModal.defaultProps = {
    cancelHandler: () => {},
    continueHandler: () => {}
};

export default WarningModal;