import { render, screen } from "@testing-library/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import userEvent from "@testing-library/user-event";

describe("ThemeSwitcher component test", () => {
  test("Render ThemeSwitcher", () => {
    render(<ThemeSwitcher />);
    expect(screen.getByText("Dark")).toBeInTheDocument();
  });

  test("Theme switching", () => {
    render(<ThemeSwitcher />);
    const body = document.body;
    const switchTheme = screen.getByTestId("switch");
    expect(screen.getByText("Dark")).toBeInTheDocument();
    userEvent.click(switchTheme);
    body.setAttribute("data-theme", "light");
    expect(screen.getByTestId("light")).toBeInTheDocument();
  });
});
