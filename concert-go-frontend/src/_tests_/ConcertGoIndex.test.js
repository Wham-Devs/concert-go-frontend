import { screen, render } from '@testing-library/react'
import ConcertGoIndex from '../pages/ConcertGoIndex'

describe("<ConcertGoIndex />", () => {
  it("Show the user a list of event cards", () => {
    render(<ConcertGoIndex />);
    expect(screen.getByAltText("Concert Image")).toBeInTheDocument();
  });
});