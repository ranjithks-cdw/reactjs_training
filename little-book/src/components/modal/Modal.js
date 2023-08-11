import styles from './Modal.scss';
const Modal = (props) => {
    const {children} = props;
    return (
        <div className="modalContainer">
            {children}
        </div>
    );
};

export default Modal;