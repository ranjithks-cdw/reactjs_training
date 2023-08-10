import { USER_DETAILS } from "../constants/pageConstants"
/**
 * @description Method to validate user credentials
 * @param {string} email 
 * @param {string} password 
 * @returns true|false 
 */
const LoginService = (email, password) => {
    return email === USER_DETAILS.EMAIL && password === USER_DETAILS.PASSWORD;
};

export default LoginService;