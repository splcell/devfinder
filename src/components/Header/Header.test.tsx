import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component test", () => {
  test("Header render", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  test("Render Header logo", () => {
    render(<Header />);
    expect(screen.getByText("devfinder")).toBeInTheDocument();
  });

  test('Render ThemeSwitcher component in Header', () => {
    render(<Header />)
    expect(screen.getByText("Dark")).toBeInTheDocument()
  })
});
