import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Login from "./Login";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Login />);
});

const typeIntoForm = ({ email = "", password = "" }) => {
  const emailInput = screen.getByPlaceholderText(/Enter email/i);
  const pwdInput = screen.getByPlaceholderText(/Enter password/i);

  if (email) {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => fireEvent.change(emailInput, { target: { value: email } }));
  }

  if (password) {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => fireEvent.change(pwdInput, { target: { value: password } }));
  }

  return { emailInput, pwdInput };
};

const clickOnSubmitButton = () => {
  const submitBtnElement = screen.getByRole("button", {
    name: /Login/i,
  });
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => fireEvent.click(submitBtnElement));
  return submitBtnElement;
};

describe("initial stages of elements", () => {
  test("if it is username", () => {
    // const email = screen.getByPlaceholderText(/Enter email/i);
    const email = screen.getByRole("textbox", { name: /email/i });
    expect(email).toBeInTheDocument();
  });

  test("if it is password", () => {
    // const pwd = screen.getByPlaceholderText(/Enter password/i);
    const pwd = screen.getByLabelText("Password:");
    expect(pwd).toBeInTheDocument();

    //'Password' string must match exactly while /password/i will search with no exact match

    // const confirmPwd = screen.getByLabelText(/confirm-password/i);
    // expect(confirmPwd).toBeInTheDocument();
  });

  test("if it is button", () => {
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  test("if username is empty", () => {
    const email = screen.getByPlaceholderText("Enter email");
    expect(email.value).toBe("");
  });

  it("expect password to be empty", () => {
    const pwd = screen.getByPlaceholderText(/Enter password/i);
    expect(pwd.value).toBe("");
  });

  it("expect button to be disables", () => {
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });

  it("error message to not be on the DOM", () => {
    const error = screen.getByTestId("error");
    expect(error.textContent).toBe("");
  });
});

describe("input changes and effects", () => {
  test("username input should change", () => {
    const { emailInput } = typeIntoForm({ email: "progfams@gmail.com" });
    expect(emailInput.value).toBe("progfams@gmail.com");
  });

  test("password input should change", () => {
    const { pwdInput } = typeIntoForm({ password: "123456" });
    expect(pwdInput.value).toBe("123456");
  });

  test("button should not be disabled when input is filled", () => {
    const btn = screen.getByRole("button");
    const { emailInput, pwdInput } = typeIntoForm({
      email: "progfams@gmail.com",
      password: "12345",
    });
    expect(btn).not.toBeDisabled();
  });

  test("login button to have spinner loading html", () => {
    typeIntoForm({
      email: "progfams@gmail.com",
      password: "12345",
    });
    const btn = clickOnSubmitButton();
    // expect(btn.innerHTML).toMatch(/spinner-border/i);
    expect(btn.innerHTML).toContain("spinner-border");
  });

  // test("login button not to have spinner loading after fetching", async () => {
  //   const btnElement = screen.getByRole("button");
  //   typeIntoForm({
  //     email: "progfams@gmail.com",
  //     password: "12345",
  //   });
  //   fireEvent.click(btnElement);
  //   await waitFor(() =>
  //     expect(btnElement.innerHTML).not.toContain("spinner-border")
  //   );
  // });

  test("User should be rendered on the DOM after fetching", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    // act(() => {
    //   render(<Login />);
    // });

    typeIntoForm({
      email: "progfams@gmail.com",
      password: "12345",
    });
    clickOnSubmitButton();
    const userItem = await screen.findByTestId("displayName");
    await waitFor(() => expect(userItem.textContent.length).toBeGreaterThan(1));
  });
});
