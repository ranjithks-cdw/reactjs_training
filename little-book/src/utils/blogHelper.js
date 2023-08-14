// Update current blog based on filtered data
export const updateCurrentBlog = (filteredBlogData, currentBlog) => {
    if(filteredBlogData.length < 0) return {};
    const index = currentBlog ? filteredBlogData.findIndex(blog => blog.title === currentBlog.title) : -1;
    return index >= 0 ? currentBlog : filteredBlogData[0];
};

// Update filtered blog based on filter type and search term
export const updateFilteredBlogs = (blogData, selectedTypes, searchTerm) => {
    return blogData.filter(blog => selectedTypes.includes(blog.type.toLocaleLowerCase()) && blog.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
};