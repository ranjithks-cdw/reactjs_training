import AppFooter from "../../containers/appFooter/AppFooter";
import HomeContainer from '../../containers/homeContainer/HomeContainer';
/**
 * @description Method to construct Home Page component
 * @returns Home Page
 * @ranjithks-cdw
 */
const HomePage = () => {
    return (
        <>
            <HomeContainer />
            <AppFooter />
        </>
    );
};

export default HomePage;