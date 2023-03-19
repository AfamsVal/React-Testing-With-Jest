import { screen, render, fireEvent, act } from "@testing-library/react";
import Carts from "./Carts";

describe("Card", () => {
  test("renders 6 articles on the screen", () => {
    render(<Carts />);
    const containerArticle = screen.getByRole("article");
    // eslint-disable-next-line testing-library/no-node-access
    expect(containerArticle.childElementCount).toBe(6);
  });
});

describe("Favourite", () => {
  test("should be able to change value of favourite select", () => {
    render(<Carts />);
    const selectEle = screen.getByLabelText("Favourite:");

    expect(selectEle.value).toBe("");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => fireEvent.change(selectEle, { target: { value: "fav" } }));

    expect(selectEle.value).toBe("fav");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => fireEvent.change(selectEle, { target: { value: "notFav" } }));

    expect(selectEle.value).toBe("notFav");
  });
});
