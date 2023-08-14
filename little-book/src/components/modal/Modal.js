import { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.scss';

/**
 * @description Method to construct Modal component
 * @returns Modal component
 */
const Modal = (props) => {
    const {children, clearModal} = props;
    const modalRef = useRef(null);
    // Method to remove modal
    const removeModal = event => {
        // remove modal if clicked outside of container
        event.target === modalRef.current && clearModal();
    };
    return (
        <div className="modalContainer" onClick={removeModal} ref={modalRef}>
            <div className='modalContent'>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    clearModal: PropTypes.func,
};

Modal.defaultProps = {
    clearModal: () => {}
};

export default Modal;