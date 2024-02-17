import App from "./App"
import { render } from "./utils/test-utils";
import { MemoryRouter } from 'react-router-dom';

describe("App", () => {
  it("renders AppRoutes", () => {
    const { getByTestId } = render(
      <MemoryRouter> {/* Wrap your component with MemoryRouter */}
        <App />
      </MemoryRouter>
    );
    expect(getByTestId('app-routes')).toBeInTheDocument();
  });
});
