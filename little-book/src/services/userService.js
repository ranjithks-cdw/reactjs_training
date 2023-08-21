import axios from "axios";
import { usersAPI } from "../constants/apiConstants";

export const retrieveUsers = async () => {
    const response = await axios.get(usersAPI);
    return response.data;
};