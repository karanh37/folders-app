import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard.component";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn().mockImplementation(() => {
      return mockNavigate;
  }),
  useLocation: () => ({
    pathname: "localhost:3000"
  }),
  useParams: () => {
      return { '*': '' };
  },
}));

test("renders default layout", async () => {
  const { container } = render(<Dashboard />);
  expect(container.querySelector("#folder-app-dashboard")).toBeTruthy();
});
