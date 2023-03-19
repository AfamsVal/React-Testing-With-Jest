import { fireEvent, render, screen } from "@testing-library/react";
import Cart from "./Cart";
import catImg from "../../asset/images/cat.jpg";

const item = {
  id: 1,
  title: "Cat",
  email: "progfams@gmail.com",
  gender: "Male",
  pic: catImg,
};

describe("Testing props", () => {
  test("properties are passed as expected", () => {
    render(<Cart item={item} favorites={[]} setFavorites={() => []} />);
    const paraElement = screen.getByTestId("label");
    expect(paraElement.textContent).toContain("Cat - Male");
  });

  test("should show email in DOM", () => {
    render(<Cart item={item} favorites={[]} setFavorites={() => []} />);
    const emailText = screen.getByText("progfams@gmail.com");
    expect(emailText).toBeInTheDocument();
  });

  test("should show gender in DOM", () => {
    render(<Cart item={item} favorites={[]} setFavorites={() => []} />);
    const gender = screen.getByText(/Male/i);
    expect(gender).toBeInTheDocument();
  });
  test("should show image in DOM", () => {
    render(<Cart item={item} favorites={[]} setFavorites={() => []} />);
    const image = screen.getByAltText(/Cat/i);
    expect(image.src).toContain(item.pic);
  });
  test("should have color of red if favourite", () => {
    render(<Cart item={item} favorites={[1]} setFavorites={() => []} />);
    const iconElement = screen.getByTestId("icon");
    expect(iconElement.style.color).toBe("red");
  });

  test("should have color of black if not favourite", () => {
    render(<Cart item={item} favorites={[]} setFavorites={() => []} />);
    const iconElement = screen.getByTestId("icon");
    expect(iconElement.style.color).toBe("black");
  });
});
