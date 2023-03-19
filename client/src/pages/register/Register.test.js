import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Register } from "./Register";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Register />);
});

// afterEach(() => {
//   // eslint-disable-next-line testing-library/no-render-in-setup
//   render(<Register />);
// });

// beforeAll(() => {
//   // eslint-disable-next-line testing-library/no-render-in-setup
//   render(<Register />);
// });

test("elements to be in the DOM", () => {
  /** getByRole */

  const pageHeading = screen.getByRole("heading", {
    level: 1,
  });
  expect(pageHeading).toBeInTheDocument();

  const sectionHeading = screen.getByRole("heading", {
    level: 2,
  });
  expect(sectionHeading).toBeInTheDocument();

  const nameElement = screen.getByRole("textbox", {
    name: "Name",
  });
  expect(nameElement).toBeInTheDocument();

  const bioElement = screen.getByRole("textbox", {
    name: "Bio",
  });
  expect(bioElement).toBeInTheDocument();

  const jobLocationElement = screen.getByRole("combobox");
  expect(jobLocationElement).toBeInTheDocument();

  const termsElement = screen.getByRole("checkbox");
  expect(termsElement).toBeInTheDocument();

  /** getByLabelText */

  const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
  expect(nameElement2).toBeInTheDocument();

  const termsElement2 = screen.getByLabelText(
    "I agree to the terms and conditions"
  );
  expect(termsElement2).toBeInTheDocument();

  /** getByPlaceholderText */

  const nameElement3 = screen.getByPlaceholderText("Fullname");
  expect(nameElement3).toBeInTheDocument();

  /** getByText */

  const paragraphElement = screen.getByText("All fields are mandatory");
  expect(paragraphElement).toBeInTheDocument();

  /** getByDisplayValue */

  const nameElement4 = screen.getByDisplayValue("Vishwas");
  expect(nameElement4).toBeInTheDocument();

  /** getByAltText */

  const imageElement = screen.getByAltText("a person with a laptop");
  expect(imageElement).toBeInTheDocument();

  /** getByTitle */

  const closeElement = screen.getByTitle("close");
  expect(closeElement).toBeInTheDocument();
});

/** getByTestId */

// const customElement = screen.getByTestId("custom-element");
// expect(customElement).toBeInTheDocument();

test("Button to be in the DOM and disabled", () => {
  const submitElement = screen.getByRole("button", { name: /Submit/i });
  expect(submitElement).toBeInTheDocument();
  expect(submitElement).toBeDisabled();
});

test("password should be more that four characters", () => {
  const pwdInputElement = screen.getByLabelText("Enter Password");

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => fireEvent.change(pwdInputElement, { target: { value: "123" } }));
  // userEvent.type(pwdInputElement, 123);

  const btnElement = screen.getByRole("button", { name: /Submit/i });
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => fireEvent.click(btnElement));

  const errorText = screen.queryByText(/Password is too short!/i);

  expect(errorText).toBeInTheDocument();
});
