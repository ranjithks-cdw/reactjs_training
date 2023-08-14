import { createSlice } from '@reduxjs/toolkit';
import { retrieveBlogs } from '../thunks/blogThunk';
import { updateCurrentBlog, updateFilteredBlogs } from '../../utils/blogHelper';

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
        blogAdded: false,
    },
    reducers: {
        modifyTypes(state, action) {
            const index = state.selectedBlogTypes.indexOf(action.payload);
            index === -1 ? state.selectedBlogTypes.push(action.payload) : state.selectedBlogTypes.splice(index,1);
            state.filteredBlogData = updateFilteredBlogs(state.blogData, state.selectedBlogTypes, state.searchTerm);
            state.currentBlog = updateCurrentBlog(state.filteredBlogData, state.currentBlog);
            if(state.filteredBlogData.length >= 0) 
                state.filteredBlogData = state.filteredBlogData.map(blog => blog.title === state.currentBlog.title ? {...blog, selected: true} : {...blog,selected: false});
        },
        modifyCurrentBlog(state, action) {
            state.currentBlog = action.payload;
            state.filteredBlogData = state.filteredBlogData.map(blog => (blog.title === state.currentBlog.title ? {...blog, selected: true} : {...blog, selected: false}));
        },
        modifySearchTerm(state, action) {
            state.searchTerm = action.payload;
            state.filteredBlogData = updateFilteredBlogs(state.blogData, state.selectedBlogTypes, state.searchTerm);
            state.currentBlog = updateCurrentBlog(state.filteredBlogData, state.currentBlog);
            if(state.filteredBlogData.length >= 0) 
                state.filteredBlogData = state.filteredBlogData.map(blog => blog.title === state.currentBlog.title ? {...blog, selected: true} : {...blog,selected: false});
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
            state.blogAdded = true;
            if(state.filteredBlogData.length >= 0) 
                state.filteredBlogData = state.filteredBlogData.map(blog => blog.title === state.currentBlog.title ? {...blog, selected: true} : {...blog,selected: false});
        },
        addNewBlog(state, action) {
            const newBlog = {...action.payload, selected: true};
            if(!state.allBlogTypes.includes(newBlog.type.toLocaleLowerCase())) {
                state.allBlogTypes.push(newBlog.type.toLocaleLowerCase());
            }
            state.selectedBlogTypes.push(newBlog.type.toLocaleLowerCase());
            state.currentBlog = {...newBlog};
            state.blogData = [newBlog, ...state.blogData];
            state.filteredBlogData = updateFilteredBlogs(state.blogData, state.selectedBlogTypes, state.searchTerm);
            state.blogAdded = true;
            if(state.filteredBlogData.length >= 0) 
                state.filteredBlogData = state.filteredBlogData.map(blog => blog.title === state.currentBlog.title ? {...blog, selected: true} : {...blog,selected: false});
        },
        alterBlogAdded(state, action) {
            state.blogAdded = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(retrieveBlogs.pending, (state, action) => {
            state.isLoad = true;
        });
        builder.addCase(retrieveBlogs.fulfilled, (state, action) => {
            const blogs = action.payload.map((blog,index) => {
                return index === 0 ? {...blog, selected: true} : {...blog, selected: false};
            });
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

export const {modifyTypes, modifyCurrentBlog, modifySearchTerm, modifyEditStatus, modifyBlogDetails, addNewBlog, alterBlogAdded} = blogSlice.actions;

export default blogSlice;