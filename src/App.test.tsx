import App from './App';
import { render, screen, fireEvent } from './utils/test-utils'
describe("App", () => {
    it("checking whether Hello world text is available", () => {
        render(<App />)
        const text = screen.getByTestId("count");
        expect(text).toBeVisible();
    })
        // Check for intial count when page renders
    it('should render the count value correctly', () => {
        const { getByTestId } = render(<App />);
        const countElement = getByTestId('count');
        expect(countElement.textContent).toBe('0');
    });
        // Renders a button element that, when clicked, calls the handleCount function and increments the count state value.
    it('should call handleCount function and increment count value when button is clicked', () => {
        const { getByTestId, getByRole } = render(<App />);
        const buttonElement = getByRole('button');
        const countElement = getByTestId('count');
        fireEvent.click(buttonElement);
        expect(countElement.textContent).toBe('1');
    });

        // Does not throw any errors when the button is clicked.
    it('should not throw any errors when the button is clicked', () => {
        const { getByRole } = render(<App />);
        const buttonElement = getByRole('button');
        expect(() => {
            fireEvent.click(buttonElement);
        }).not.toThrow();
    });
})    