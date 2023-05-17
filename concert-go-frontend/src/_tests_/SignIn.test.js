import { render, screen } from "@testing-library/react";
import SignIn from "../components/SignUp";

describe("<SignIn/>", () => {
  it("renders for the user", () => {
    render(
    <SignIn />
    );
    expect(screen.getByText(/CONCERT GO/i)).toBeInTheDocument()
    screen.logTestingPlaygroundURL()
    expect(screen.getByRole('button', {
        name: /read more/i
      })).toBeInTheDocument()
    expect(screen.getByRole('button', {
        name: /login/i
      })).toBeInTheDocument()
  });
});
