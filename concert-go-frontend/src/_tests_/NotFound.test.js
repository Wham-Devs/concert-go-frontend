import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound";

describe("<NotFound />", () => {
	it("renders the NotFound page for user", () => {
		render(<NotFound />);
		expect(screen.getByText(/404: PAGE NOT FOUND/i));
		screen.logTestingPlaygroundURL();
	});
});
