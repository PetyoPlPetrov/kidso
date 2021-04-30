import { render, screen } from "@testing-library/react";
import Main from "../components/Main";
import NoMatch from "../components/NoMatch";
import { mockWrap } from "./mockUtils";

test("Should render the routes when routes are loaded", () => {
  render(mockWrap(Main));

  expect(
    screen.getByText("/content/chesto-zadavani-vaprosi.html")
  ).toBeInTheDocument();
});

test("Should render the 404 route", () => {
  render(mockWrap(NoMatch));

  expect(screen.getByText("No match for")).toBeInTheDocument();
});
