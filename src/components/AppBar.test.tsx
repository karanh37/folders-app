import React from "react";
import { render } from "@testing-library/react";
import AppBarPanel from "./AppBar.component";


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

test("app bar renders default layout", () => {
  const { getByText } = render(<AppBarPanel />);
  expect (getByText('File explorer')).toBeTruthy()
});
