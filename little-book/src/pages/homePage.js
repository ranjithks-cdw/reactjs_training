import MembersList from "../components/membersList/MembersList";
import Modal from "../components/modal/Modal";
import NewBlog from "../components/newBlog/NewBlog";
import BlogDetails from "../containers/blogDetails/BlogDetails";
import BlogList from "../containers/blogList/BlogList";
import SideBar from "../containers/sideBar/SideBar";
import styles from './HomePage.scss';

const HomePage = () => {
    return (
        <>
            <SideBar />
            <BlogList />
            <BlogDetails />
            {/* <Modal>
                <MembersList />
            </Modal> */}
            {/* <Modal>
                <NewBlog />
            </Modal> */}
        </>
    );
};

export default HomePage;