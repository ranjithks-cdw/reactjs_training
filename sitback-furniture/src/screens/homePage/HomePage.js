import styles from './HomePage.module.scss';
import AppFooter from "../../containers/appFooter/AppFooter";
import HomeContainer from '../../containers/homeContainer/HomeContainer';

const HomePage = () => {
    return (
        <>
            <HomeContainer />
            <AppFooter />
        </>
    );
};

export default HomePage;