import { render, screen } from "@testing-library/react";
import { UserCard } from "./UserCard";

const userCardData = {
  login: "login",
  id: 1,
  avatar: "avatar",
  name: "name",
  company: "company",
  blog: "blog",
  location: "location",
  bio: "bio",
  twitter: "twitter",
  followers: 3,
  following: 3,
  created: "created",
  repos: 7,
};

describe("UserCard Component", () => {
  test("UserCard render", () => {
    render(<UserCard {...userCardData} />);
    expect(screen.getByTestId("user-card")).toBeInTheDocument();
  });

  test("Avatar render", () => {
    render(<UserCard {...userCardData} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("Card title render", () => {
    render(<UserCard {...userCardData} />);
    expect(screen.getByTestId("card-title")).toBeInTheDocument();
  });

  test("User bio render", () => {
    render(<UserCard {...userCardData} />);
    expect(screen.getByText("bio")).toBeInTheDocument();
  });

  test("User stat render", () => {
    render(<UserCard {...userCardData} />);
    expect(screen.getByTestId("user-stat")).toBeInTheDocument();
  });

  test("User info render", () => {
    render(<UserCard {...userCardData} />);
    expect(screen.getByTestId("user-info")).toBeInTheDocument();
  });
});
