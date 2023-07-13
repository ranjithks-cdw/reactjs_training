export const validateForm = ({customerName, contactNumber, homeTown, travelDestination}) => {
    if(!customerName || customerName.trim().length <=0) {
        return <p>Name must be valid</p>;
    }
    if(!contactNumber || contactNumber.trim().length !==10) {
        return <p>Contact Number must be valid</p>;
    }
    if(!homeTown || !travelDestination || homeTown === travelDestination) {
        return <p>Home town and Destination should not be empty and same</p>;
    }
    return <p>Thank you <span>{customerName}</span> for expressing your interest in travelling with us. Our Sales team will get back with the best packages from <span>{homeTown}</span> to <span>{travelDestination}</span>.</p>;
};