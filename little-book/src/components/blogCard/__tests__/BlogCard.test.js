import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogCard from "../BlogCard";

describe("BlogCard" , () => {
    it('should render Blog Card', () => {
        const blogData = {
            title: 'How To Time Travel',
            type: 'International',
            details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
        };
        render(<BlogCard blogData={blogData} updateCurrentBlog={() => {}}/>);
        const titleContent = screen.getByText(blogData.title);
        const detailsContent = screen.getByText(blogData.details);
        const typeContent = screen.getByText(blogData.type);
        expect(typeContent).toBeInTheDocument();
        expect(titleContent).toBeInTheDocument();
        expect(detailsContent).toBeInTheDocument();
    });

    it('Blog Card should update current blog', () => {
        const blogData = {
            title: 'How To Time Travel',
            type: 'International',
            details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
        };
        const updateCurrentBlog = jest.fn();
        const {blogCardDOM} = render(<BlogCard blogData={blogData} updateCurrentBlog={updateCurrentBlog}/>);
        const titleContent = screen.getByText(blogData.title);
        const detailsContent = screen.getByText(blogData.details);
        fireEvent.click(titleContent);
        fireEvent.click(detailsContent);
        expect(updateCurrentBlog).toHaveBeenCalledTimes(2);
    });
})