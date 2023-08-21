import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "../Checkbox";
import { Provider } from "react-redux";
import { store } from "../../../store";


describe('Checkbox', () => {
    const props = {
        label: 'International'
    };
    it('should render Checkbox', () => {
        render(
            <Provider store={store}>
                <Checkbox {...props} />
            </Provider>
            );
        const labelText = screen.getByText('International Blogs');
        expect(labelText).toBeInTheDocument();
    })

    it('should update check value on click of checkbox', () => {
        render(
            <Provider store={store}>
                <Checkbox {...props} />
            </Provider>
            );
        const checkbox = screen.getByTestId('checkboxInput');
        fireEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    })

    it('should update check value on click of labels', () => {
        render(
            <Provider store={store}>
                <Checkbox {...props} />
            </Provider>
            );
        const checkbox = screen.getByTestId('checkboxInput');
        const labelText = screen.getByText('International Blogs');
        fireEvent.click(labelText);
        expect(checkbox).not.toBeChecked();
        fireEvent.click(labelText);
        expect(checkbox).toBeChecked();
    })
})