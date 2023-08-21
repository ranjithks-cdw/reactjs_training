import blogSlice, { addNewBlog, modifyBlogDetails, modifyCurrentBlog, modifyEditStatus, modifySearchTerm, modifyTypes } from "../blogSlice";

describe('blog slice', () => {
    const initState = {
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
    }

    it('should have correct initial state', () => {
        expect(blogSlice.reducer(initState, {type: 'unknown'})).toEqual(initState);
    });

    it('should modify selected types', () => {
        const action = modifyTypes("international");
        const updatedState = {...initState, selectedBlogTypes: ['international'], currentBlog: null}
        expect(blogSlice.reducer(initState, action)).toEqual(updatedState);
        const action2 = modifyTypes("regional");
        expect(blogSlice.reducer(updatedState, action)).toEqual({...initState, currentBlog: null});
        expect(blogSlice.reducer(initState, action)).toEqual(updatedState);
        const updatedState2 = {...updatedState, selectedBlogTypes: ['international', 'regional']};
        expect(blogSlice.reducer(updatedState, action2)).toEqual(updatedState2);
    });

    it('should modify current blog', () => {
        const blog = {
            title: 'How to time travel',
            type: 'International',
            details: 'details'
        };
        const updatedState = {...initState, currentBlog: blog, scrollTop: false};
        const action = modifyCurrentBlog(blog);
        expect(blogSlice.reducer(initState, action)).toEqual(updatedState);
    });

    it('should modify search term', () => {
        const action = modifyEditStatus(true);
        const updatedState = {...initState, isEditing: true};
        expect(blogSlice.reducer(initState, action)).toEqual(updatedState);
    });

    it('should edit blog details', () => {
        const currentBlog = {
            title: 'How to time travel',
            type: 'International',
            details: 'details'
        };
        const currentState = {
            ...initState,
            blogData: [currentBlog],
            currentBlog: currentBlog,
        };
        const modifiedBlog = {
            title: 'Edited Data',
            type: 'International',
            details: 'New Details'
        }
        const action = modifyBlogDetails(modifiedBlog);
        const updatedState = {...currentState, currentBlog: modifiedBlog, blogData: [modifiedBlog]};
        expect(blogSlice.reducer(currentState, action)).toEqual(updatedState);
    });

    it('should add new blog', () => {
        const currentBlog = {
            title: 'How to time travel',
            type: 'International',
            details: 'details'
        };
        const currentState = {
            ...initState,
            blogData: [currentBlog],
            currentBlog: currentBlog,
            allBlogTypes: ['International'],
            selectedBlogTypes: ['International']
        };
        const modifiedBlog = {
            title: 'Edited Data',
            type: 'local',
            details: 'New Details'
        };
        const action = addNewBlog(modifiedBlog);
        const updatedState = {...currentState, currentBlog: modifiedBlog, blogData: [modifiedBlog, currentBlog], allBlogTypes: [ 'International', 'local'], selectedBlogTypes: ['International', 'local'], filteredBlogData: [modifiedBlog]};
        expect(blogSlice.reducer(currentState, action)).toEqual(updatedState);
    });
});