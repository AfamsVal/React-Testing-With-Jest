import { render, screen } from "@testing-library/react";
import Count from "./Count";

describe("counter", () => {
  //   it("displays initial count", () => {
  //     render(<Count initailCount={0} />);
  //     const countValue = screen.getByTestId("count");
  //   });

  test("expected to have list items", () => {
    render(<Count />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    expect(listItems.length).toBeGreaterThan(2);
  });
});
