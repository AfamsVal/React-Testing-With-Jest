import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

describe("collective login test", () => {
  test("if it is username", () => {
    render(<Login />);
    const email = screen.getByPlaceholderText(/Enter email/i);
    expect(email).toBeInTheDocument();
  });

  test("if it is password", () => {
    render(<Login />);
    const pwd = screen.getByPlaceholderText(/Enter password/i);
    expect(pwd).toBeInTheDocument();
  });

  test("if it is button", () => {
    render(<Login />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  test("if username is empty", () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("Enter email");
    expect(email.value).toBe("");
  });

  it("expect password to be empty", () => {
    render(<Login />);
    const pwd = screen.getByPlaceholderText(/Enter password/i);
    expect(pwd.value).toBe("");
  });

  it("expect button to be disables", () => {
    render(<Login />);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });

  it("error message to not be on the DOM", () => {
    render(<Login />);
    const error = screen.getByTestId("error");
    expect(error.textContent).toBe("");
  });

  test("username input should change", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/Enter email/i);
    const email = "progfams@gmail.com";
    fireEvent.change(emailInput, { target: { value: email } });
    expect(emailInput.value).toBe("progfams@gmail.com");
  });

  test("password input should change", () => {
    render(<Login />);
    const pwdInput = screen.getByPlaceholderText(/Enter password/i);
    const pwd = "123456";
    fireEvent.change(pwdInput, { target: { value: pwd } });
    expect(pwdInput.value).toBe("123456");
  });

  test("button should not be disabled when input is filled", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/Enter email/i);
    const pwdInput = screen.getByPlaceholderText(/Enter password/i);
    const btn = screen.getByRole("button");
    const pwd = "12345";
    const email = "progfams@gmail.com";
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(pwdInput, { target: { value: pwd } });
    expect(btn).not.toBeDisabled();
  });

  test("button to have loading html", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText(/Enter email/i);
    const pwdInput = screen.getByPlaceholderText(/Enter password/i);
    const btn = screen.getByRole("button");
    const pwd = "12345";
    const email = "progfams@gmail.com";
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(pwdInput, { target: { value: pwd } });
    fireEvent.click(btn);
    expect(btn.innerHTML).toContain("spinner-border");
  });
});
