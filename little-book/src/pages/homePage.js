import { memo, useCallback, useState } from "react";
import {PulseLoader} from 'react-spinners';
import MembersList from "../components/membersList/MembersList";
import Modal from "../components/modal/Modal";
import NewBlog from "../components/newBlog/NewBlog";
import BlogDetails from "../containers/blogDetails/BlogDetails";
import BlogList from "../containers/blogList/BlogList";
import SideBar from "../containers/sideBar/SideBar";
import { MODALS } from "../constants/pageConstants";
import { retrieveUsers } from "../services/userService";
import WarningModal from "../components/warningModal/WarningModal";
import { useDispatch, useSelector } from "react-redux";
import { modifyEditStatus } from "../store";

/**
 * @description Method to construct HomePage component
 * @returns HomePage component
 */
const HomePage = () => {
    const dispatch = useDispatch();
    const [modal,setModal] = useState();
    const [membersList, setMembersList] = useState([]);
    const [load, setLoad] = useState(true);
    const [showWarningModal, setShowWarningModal] = useState(false);

    const { isEditing } = useSelector(state => {
        return state.blogs;
    });

    // Method to retrieve users data and show in modal
    const showMembers = async () => {
        setModal(MODALS.MEMBERS);
        const data = await retrieveUsers();
        setMembersList(data);
        setLoad(false);
    };

    const showAddBlogModal = () => {
        setModal(MODALS.NEW_BLOG);
    };

    const cancelHandler = () => {
        setShowWarningModal(false);
    };

    const continueHandler = () => {
        setShowWarningModal(false);
        setModal();
        dispatch(modifyEditStatus(false));
    }

    // Remove modal
    const clearModal = useCallback(isAdded => {
        if(modal === MODALS.MEMBERS || isAdded || !isEditing)
            return setModal();
         setShowWarningModal(true);
    },[modal, isEditing]);
    return (
        <>
            <SideBar showMembers={showMembers} clearModal={clearModal}/>
            <BlogList showAddBlogModal={showAddBlogModal} clearModal={clearModal}/>
            <BlogDetails />
            {
                modal === MODALS.MEMBERS && 
                    <Modal clearModal={clearModal}>
                        {load ? <PulseLoader className="loader" color="#a239a8"/> : <MembersList membersData={membersList}/>}
                    </Modal>
            }
            {
                modal === MODALS.NEW_BLOG && 
                    <Modal clearModal={clearModal}>
                        <NewBlog clearModal={clearModal}/>
                    </Modal>
            }
            {showWarningModal && <WarningModal continueHandler={continueHandler} cancelHandler={cancelHandler}/>}
        </>
    );
};

export default memo(HomePage);