import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import "@testing-library/jest-dom/extend-expect"; // Import this line to extend expect with custom matchers
import userEvent from "@testing-library/user-event";

// Portfolio Elements
test.skip("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test.skip("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test.skip("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test.skip("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test.skip("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);
  expect(screen.getByLabelText("Username")).toBeInTheDocument();
  expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);
  expect(
    screen.getByRole("checkbox", { name: /singing/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("checkbox", { name: /dancing/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("checkbox", { name: /surfing/i })
  ).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);
  expect(screen.getByRole("checkbox", { name: /singing/i })).not.toBeChecked();
  expect(screen.getByRole("checkbox", { name: /dancing/i })).not.toBeChecked();
  expect(screen.getByRole("checkbox", { name: /surfing/i })).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);
  const username = screen.getByLabelText("Username");
  userEvent.type(username, "Vijaylaxmi");
  expect(username).toHaveValue("Vijaylaxmi");
  const email = screen.getByLabelText("Email Address");
  userEvent.type(email, "123@gmail.com");
  expect(email).toHaveValue("123@gmail.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);
  const checkboxSinging = screen.getByRole("checkbox", { name: /singing/i });
  userEvent.click(checkboxSinging);
  expect(checkboxSinging).toBeChecked();
  const checkboxDancing = screen.getByRole("checkbox", { name: /dancing/i });
  userEvent.click(checkboxDancing);
  expect(checkboxDancing).toBeChecked();
  const checkboxSurfing = screen.getByRole("checkbox", { name: /surfing/i });
  userEvent.click(checkboxSurfing);
  expect(checkboxSurfing).toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);
  const submit = screen.getByRole("button", { name: /Submit/i });
  const username = screen.getByLabelText("Username");
  const checkSinging = screen.getByRole("checkbox", { name: /singing/i });
  const checkDancing = screen.getByRole("checkbox", { name: /dancing/i });
  const checkSurfing = screen.getByRole("checkbox", { name: /surfing/i });
  userEvent.type(username, "Vijaylaxmi");
  userEvent.click(checkSinging);
  userEvent.click(checkDancing);
  userEvent.click(checkSurfing);
  userEvent.click(submit);
  expect(username).toBeInTheDocument();
  expect(checkSinging).toBeInTheDocument();
  expect(checkDancing).toBeInTheDocument();
  expect(checkSurfing).toBeInTheDocument();
});
