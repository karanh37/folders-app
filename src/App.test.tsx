import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("render default layout", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const breadCrumbElement = screen.getByText(/All/i);
  expect(breadCrumbElement).toBeInTheDocument();
});
