import { ERRORS } from "../constants/pageConstants";

/**
 * @description Method to check for lottery prize
 * @param {string} mobile 
 * @returns Error code
 */
export const checkForPrize = mobile => {
    const mobileRegex = /^[6-9]{1}[0-9]{9}/;
    if(mobile.length !== 10 || !mobileRegex.test(mobile))
        return ERRORS.INVALID;
    const lastDigit =  parseInt(mobile.slice(-1));
    if(lastDigit % 2 === 0)
        return;
    return ERRORS.UNLUCKY;
};
