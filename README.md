# Testing User Events Lab

## Learning Goals

- Use test-driven development to create a form and test user events

## Introduction

In this lab, you will build on the portfolio site you created earlier in this
section to get some practice at testing user events in React. You can use the
code from the earlier lab as your starting point. Since you will be responsible
for writing the tests, there are no tests provided for this lab. You can check
your work against the solution branch once you're finished.

## Instructions

The requirement for this lab is to add a newsletter signup form to your
portfolio page. The form should include:

- a text input for the user's name
- a text input for the user's email address
- a set of checkboxes allowing the user to select their interests
- a button to submit the form

When the form is submitted, use the form data display a personalized message
indicating that the form was submitted successfully.

**Bonus:** Include a list of the interests the user selected in the message as
well.

## The Process

Recall that, when testing user events, your tests should:

- verify that the initial state of the page is what you want
- simulate a user event (e.g., typing in a text box)
- verify that the state of the page updates as expected

Be sure to follow the test-driven development process in creating your tests and
code. Specifically, for each feature of your app, you should:

- identify the desired element or behavior
- write the tests to check for that element or behavior
- write the code to make the tests pass

Remember also to use accessible queries as much as possible.

## Resources

- [Testing Library: Queries][queries]
- [Jest DOM - Custom Matchers][jest-dom]
- [Testing Library: user-event][user-event]
- [MDN: ARIA Role Reference][mdn-aria-roles]

[queries]: https://testing-library.com/docs/queries/about
[jest-dom]: https://github.com/testing-library/jest-dom
[user-event]: https://testing-library.com/docs/ecosystem-user-event/
[mdn-aria-roles]:
  https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
