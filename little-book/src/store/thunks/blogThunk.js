import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { blogAPI } from '../../constants/apiConstants';

export const retrieveBlogs = createAsyncThunk('blogs/getBlogs', async () => {
    const response = await axios.get(blogAPI);
    return response.data;
});