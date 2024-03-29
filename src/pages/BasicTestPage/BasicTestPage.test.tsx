import BasicTestPage from "./BasicTestPage";
import { render, screen, fireEvent } from "../../utils/test-utils";
describe("BasicTestPage", () => {
  it("checking whether Hello world text is available", () => {
    render(<BasicTestPage />);
    const text = screen.getByTestId("count");
    expect(text).toBeVisible();
  });
  // Check for intial count when page renders
  it("should render the count value correctly", () => {
    const { getByTestId } = render(<BasicTestPage />);
    const countElement = getByTestId("count");
    expect(countElement.textContent).toBe("0");
  });
  // Renders a button element that, when clicked, calls the handleCount function and increments the count state value.
  it("should call handleCount function and increment count value when button is clicked", () => {
    const { getByTestId, getByRole } = render(<BasicTestPage />);
    const buttonElement = getByRole("button");
    const countElement = getByTestId("count");
    fireEvent.click(buttonElement);
    expect(countElement.textContent).toBe("1");
  });

  // Does not throw any errors when the button is clicked.
  it("should not throw any errors when the button is clicked", () => {
    const { getByRole } = render(<BasicTestPage />);
    const buttonElement = getByRole("button");
    expect(() => {
      fireEvent.click(buttonElement);
    }).not.toThrow();
  });

  it("Api success scenario on load", async () => {
    render(<BasicTestPage />);
    // list items
    const listItems = await screen.findAllByRole("listitem");
    // Check if the list items are visible
    expect(listItems).toHaveLength(1); // We expect one list item based on the mock data

    // Check the content of the list item
    expect(listItems[0]).toHaveTextContent(
      "Do something nice for someone I care about"
    );
  });
});
