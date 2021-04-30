import { render, screen } from "@testing-library/react";
import Main from "../components/Main";
import NoMatch from "../components/NoMatch";
import { mockWrap } from "./mockUtils";

test("Should render the routes when routes are loaded", async () => {
  const { findByText } = render(mockWrap(Main));
  let counter = await findByText("/content/chesto-zadavani-vaprosi.html");
  expect(counter).toHaveTextContent("/content/chesto-zadavani-vaprosi.html");

  expect(
    screen.getByText("/content/chesto-zadavani-vaprosi.html")
  ).toBeInTheDocument();
});

test("Should render the 404 route", () => {
  render(mockWrap(NoMatch));

  expect(screen.getByText("No match for")).toBeInTheDocument();
});
