import App from './App';
import { render, screen } from './utils/test-utils'
describe("App", () => {
    it("checking whether Hello world text is available", () => {
        render(<App />)
        const text = screen.getByText('Hello World ☻');
        expect(text).toBeInTheDocument();
    })
})    