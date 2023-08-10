import { memo } from "react";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import Image from "../../components/image/Image";
import Languages from "../../components/languages/Languages";
import Lottery from "../../components/lottery/Lottery";
import Trailers from "../../components/trailers/Trailers";
import { IMAGE_URLS } from "../../constants/pageConstants";
import Teasers from "../../containers/teasersContainer/Teasers";
import styles from './HomePage.module.scss';

/**
 * @description Method to construct Home Page component
 * @returns HomePage component
 */
const HomePage = () => {
    return (
        <>
            <Image src={IMAGE_URLS.SINDEL} className="coverImage" alt="coverImage" />
            <ErrorBoundary className={styles.error}>
                <Lottery />
            </ErrorBoundary>
            <Trailers />
            <Teasers />
            <Languages />
        </>
    );
};

export default memo(HomePage);