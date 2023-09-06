import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from "./Search";

const onSubmit = jest.fn();

describe("Search component", () => {
  test("Search render", () => {
    render(<Search hasError={false} onSubmit={onSubmit} />);
    expect(
      screen.getByPlaceholderText("Search Github username")
    ).toBeInTheDocument();
  });

  test("Search error", () => {
    render(<Search hasError={true} onSubmit={onSubmit} />);
    expect(screen.getByText("No results")).toBeInTheDocument();
  });

  test("Render search button", () => {
    render(<Search hasError={false} onSubmit={onSubmit} />);
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  test("Work typing in Search", () => {
    render(
      <Search hasError={false} onSubmit={onSubmit} />
    );
    const input = screen.getByPlaceholderText('Search Github username')
    fireEvent.change(input, { target: { value: 'Hello, World!' } });
    expect(screen.getByDisplayValue('Hello, World!')).toBeInTheDocument();
  });
});
