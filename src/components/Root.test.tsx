import React from "react";
import { render, screen } from "@testing-library/react";
import Root from "./Root.component";
import { FileTypes, Folder } from "../model/Folder.interface";

const folders: Folder[] = [
  {
      "name": "folder1",
      "type": FileTypes.Folder
  },
  {
      "name": "folder2",
      "type": FileTypes.Folder
  },
  {
      "name": "folder3",
      "type": FileTypes.Folder
  },
  {
      "name": "folder4",
      "type": FileTypes.Folder
  },
  {
      "name": "folder5",
      "type": FileTypes.Folder
  },
  {
      "name": "folder6",
      "type": FileTypes.Folder
  },
  {
      "name": "folder7",
      "type": FileTypes.Folder
  },
  {
      "name": "folder8",
      "type": FileTypes.Folder
  }
]

const mockDefaultProps = {
  "items" : folders
}

const mockNavigate = jest.fn();
const mockLocation = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn().mockImplementation(() => {
      return mockNavigate;
  }),
  useLocation: () => ({
    pathname: "localhost:3000"
  })
}));

it("should load cards", async () => {
  const props = { ...mockDefaultProps };
  const { container } = render(<Root {...props} />);
  expect(container.getElementsByClassName('folder-card').length).toBe(8);
});

it("should load empty", async () => {
  const props = { items: [] };
  const { container } = render(<Root {...props} />);
  expect(container.getElementsByClassName('folder-card').length).toBe(0);
  
  const emptyEle = screen.getByText(/No item in this folder/i);
  expect(emptyEle).toBeInTheDocument();

});

