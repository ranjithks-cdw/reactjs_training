// Update filtered blog based on filter type and search term
export const updateFilteredBlogs = (blogData, selectedTypes, searchTerm) => {
    return blogData.filter(blog => selectedTypes.includes(blog.type.toLocaleLowerCase()) && blog.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
};