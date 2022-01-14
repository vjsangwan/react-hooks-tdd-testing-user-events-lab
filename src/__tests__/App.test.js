import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

// Portfolio Elements - Initial State

// test("displays a top-level heading with the text `Hi, I'm _______`", () => {
//   render(<App />);

//   const topLevelHeading = screen.getByRole("heading", {
//     name: /hi, i'm/i,
//     exact: false,
//     level: 1,
//   });

//   expect(topLevelHeading).toBeInTheDocument();
// });

// test("displays an image of yourself", () => {
//   render(<App />);

//   const image = screen.getByAltText("My profile pic");

//   expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
// });

// test("displays second-level heading with the text `About Me`", () => {
//   render(<App />);

//   const secondLevelHeading = screen.getByRole("heading", {
//     name: /about me/i,
//     level: 2,
//   });

//   expect(secondLevelHeading).toBeInTheDocument();
// });

// test("displays a paragraph for your biography", () => {
//   render(<App />);

//   const bio = screen.getByText(/lorem ipsum/i);

//   expect(bio).toBeInTheDocument();
// });

// test("displays the correct links", () => {
//   render(<App />);

//   const githubLink = screen.getByRole("link", {
//     name: /github/i,
//   });
//   const linkedinLink = screen.getByRole("link", {
//     name: /linkedin/i,
//   });

//   expect(githubLink).toHaveAttribute(
//     "href",
//     expect.stringContaining("https://github.com")
//   );

//   expect(linkedinLink).toHaveAttribute(
//     "href",
//     expect.stringContaining("https://linkedin.com")
//   );
// });

// Toggle button - Initial state
test("initial mode toggle button text is 'Switch to dark mode'", () => {
  render(<App />);

  expect(screen.getByRole("button", { name: /switch to dark mode/i })).toBeInTheDocument();
});

test("page is initially set to light mode", () => {
  render(<App />);

  expect(screen.getByRole("main")).toHaveClass('light');
});

// Toggle button - Switching modes
test("clicking the button changes the button text to 'Switch to light mode'", () => {
  render(<App />);

  userEvent.click(screen.getByRole("button", { name: /switch to dark mode/i }));

  expect(screen.getByRole("button", { name: /switch to light mode/i })).toBeInTheDocument;
});

test("clicking the button changes the page to dark mode", () => {
  render(<App />);

  userEvent.click(screen.getByRole("button", { name: /switch to dark mode/i }));

  expect(screen.getByRole("main")).toHaveClass('dark');
});

// Newsletter Button - Initial State

test("sign-up button appears on the page", () => {
  render(<App />);

  expect(screen.getByRole("button", { name: /sign up for my newsletter/i })).toBeInTheDocument();
})

// Newsletter Button - Displaying Form
test("clicking the sign-up button removes the button from the page", () => {
  render(<App />);

  const signupButton = screen.queryByRole("button", { name: /sign up for my newsletter/i });

  userEvent.click(signupButton);

  expect(signupButton).not.toBeInTheDocument();
})

test("clicking the sign-up button displays the form on the page", () => {
  render(<App />);

  userEvent.click(screen.queryByRole("button", { name: /sign up for my newsletter/i }));

  expect(screen.getByTitle(/signup/i)).toBeInTheDocument();
})

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App/ >);

  userEvent.click(screen.queryByRole("button", { name: /sign up for my newsletter/i }));

  expect(screen.getByLabelText(/enter your name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/enter your email address/i)).toBeInTheDocument();
})

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App/ >);

  userEvent.click(screen.queryByRole("button", { name: /sign up for my newsletter/i }));

  expect(screen.getAllByRole('checkbox').length).toBe(3);
})

test("the checkboxes are initially unchecked", () => {
  render(<App/ >);

  userEvent.click(screen.queryByRole("button", { name: /sign up for my newsletter/i }));

  expect(screen.getByRole("checkbox", { name: /interest 1/i })).not.toBeChecked();
  expect(screen.getByRole("checkbox", { name: /interest 2/i })).not.toBeChecked();
  expect(screen.getByRole("checkbox", { name: /interest 3/i })).not.toBeChecked();
})

test("the form includes a Submit button", () => {
  render(<App/ >);

  userEvent.click(screen.queryByRole("button", { name: /sign up for my newsletter/i }));

  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();

})

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App/ >);

  userEvent.click(screen.queryByRole("button", { name: /sign up for my newsletter/i }));

  const fullName = screen.getByLabelText(/enter your name/i);
  const emailAddress = screen.getByLabelText(/enter your email address/i);

  userEvent.type(fullName, "Fname Lname");
  userEvent.type(emailAddress, "fnamelname@email.com");

  expect(fullName).toHaveValue("Fname Lname");
  expect(emailAddress).toHaveValue("fnamelname@email.com");
})

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);

  userEvent.click(screen.queryByRole("button", { name: /sign up for my newsletter/i }));

  const interest1 = screen.getByRole("checkbox", { name: /interest 1/i });
  const interest2 = screen.getByRole("checkbox", { name: /interest 2/i });
  const interest3 = screen.getByRole("checkbox", { name: /interest 3/i });

  userEvent.click(interest1);
  userEvent.click(interest2);
  userEvent.click(interest3);

  expect(interest1).toBeChecked();
  expect(interest2).toBeChecked();
  expect(interest3).toBeChecked();
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App/ >);

  userEvent.click(screen.queryByRole("button", { name: /sign up for my newsletter/i }));

  userEvent.type(screen.getByLabelText(/enter your name/i), "Fname Lname");
  userEvent.type(screen.getByLabelText(/enter your email address/i), "fnamelname@email.com");
  userEvent.click(screen.getByRole("checkbox", { name: /interest 1/i }));
  userEvent.click(screen.getByRole("checkbox", { name: /interest 3/i }));
  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(screen.getByText("Thanks Fname Lname! You are signed up for these newsletters:")).toBeInTheDocument();
  expect(screen.getAllByRole('listitem').length).toBe(2);
  expect(screen.getByText('Interest 1')).toBeInTheDocument();
  expect(screen.getByText('Interest 3')).toBeInTheDocument();

})