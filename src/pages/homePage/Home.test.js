import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders This is Home", () => {
  render(<Home />);
  const linkElement = screen.getByText(/This is Home/i);
  expect(linkElement).toBeInTheDocument();
});

describe("all simple test", () => {
  it("check if the sum is in the document", () => {
    render(<Home />);
    const item = screen.getByTestId("sum");
    expect(item).toBeInTheDocument();
    expect(Number(item.textContent)).toBeGreaterThan(2);
  });
});
