import { memo } from "react";
import Image from "../../components/image/Image";
import LoginCard from "../../components/loginCard/LoginCard";
import { IMAGE_URLS } from "../../constants/pageConstants";

/**
 * @description Method to construct Login Page component
 * @returns Login Page
 */
const Login = () => {
    return (
        <>
            <Image src={IMAGE_URLS.SINDEL} className="coverImage" alt="coverImage" />
            <LoginCard />
        </>
    );
};

export default memo(Login);