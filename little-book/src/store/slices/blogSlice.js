import { createSlice } from '@reduxjs/toolkit';
import { retrieveBlogs } from '../thunks/blogThunk';
import { updateFilteredBlogs } from '../../utils/blogHelper';

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogData: [],
        filteredBlogData: [],
        allBlogTypes: [],
        selectedBlogTypes: [],
        searchTerm: '',
        currentBlog: {},
        isEditing: false,
        isLoad: false,
        error: null,
        scrollTop: true
    },
    reducers: {
        modifyTypes(state, action) {
            const index = state.selectedBlogTypes.indexOf(action.payload);
            index === -1 ? state.selectedBlogTypes.push(action.payload) : state.selectedBlogTypes.splice(index,1);
            state.filteredBlogData = updateFilteredBlogs(state.blogData, state.selectedBlogTypes, state.searchTerm);
            state.currentBlog = state.filteredBlogData.length > 0 ? state.filteredBlogData[0]: null;
            state.scrollTop = true;
        },
        modifyCurrentBlog(state, action) {
            state.currentBlog = {...action.payload};
            state.scrollTop = false;
        },
        modifySearchTerm(state, action) {
            state.searchTerm = action.payload;
            state.filteredBlogData = updateFilteredBlogs(state.blogData, state.selectedBlogTypes, state.searchTerm);
            state.currentBlog = state.filteredBlogData.length > 0 ? state.filteredBlogData[0]: null;
            state.scrollTop = true;
        },
        modifyEditStatus(state,action) {
            state.isEditing = action.payload;
        },
        modifyBlogDetails(state,action) {
            const blogData = state.blogData.filter(blog => blog.title !== state.currentBlog.title);
            const modifiedBlog = {...state.currentBlog, ...action.payload};
            state.currentBlog = modifiedBlog;
            state.blogData = [modifiedBlog, ...blogData];
            state.filteredBlogData = updateFilteredBlogs(state.blogData, state.selectedBlogTypes, state.searchTerm);
            state.isEditing = false;
            state.scrollTop = true;
        },
        addNewBlog(state, action) {
            const newBlog = {...action.payload};
            if(!state.allBlogTypes.includes(newBlog.type.toLocaleLowerCase())) {
                state.allBlogTypes.push(newBlog.type.toLocaleLowerCase());
            }
            if(!state.selectedBlogTypes.includes(newBlog.type.toLocaleLowerCase())) {
                state.selectedBlogTypes.push(newBlog.type.toLocaleLowerCase());
            }
            state.currentBlog = {...newBlog};
            state.blogData = [newBlog, ...state.blogData];
            state.filteredBlogData = updateFilteredBlogs(state.blogData, state.selectedBlogTypes, state.searchTerm);
            state.scrollTop = true;
            state.isEditing = false;
        },
    },
    extraReducers: builder => {
        builder.addCase(retrieveBlogs.pending, (state, action) => {
            state.isLoad = true;
        });
        builder.addCase(retrieveBlogs.fulfilled, (state, action) => {
            const blogs = action.payload;
            const allBlogTypes = blogs.map(blog => blog.type.toLocaleLowerCase());
            const uniqueTypes = allBlogTypes.filter((value, index, array) => array.indexOf(value) === index);
            state.isLoad = false;
            state.blogData = blogs;
            state.filteredBlogData = blogs;
            state.allBlogTypes = uniqueTypes;
            state.selectedBlogTypes = uniqueTypes;
            state.currentBlog = blogs[0];
        });
        builder.addCase(retrieveBlogs.rejected, (state, action) => {
            state.isLoad = false;
            state.error = action.payload;
        });
    }
});

export const {modifyTypes, modifyCurrentBlog, modifySearchTerm, modifyEditStatus, modifyBlogDetails, addNewBlog} = blogSlice.actions;

export default blogSlice;