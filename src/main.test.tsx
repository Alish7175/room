import { render } from "./utils/test-utils";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("Main", () => {
  it("renders App within BrowserRouter", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByTestId('app-routes')).toBeInTheDocument();
  });
});