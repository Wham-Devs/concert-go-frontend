import { render, screen } from '@testing-library/react'
import SignUp from  '../components/SignUp'

describe ("<SignUp/>", () => {
    it("renders for the user", () => {
        render(
            <SignUp/>
        )
        expect(screen.getByText(/CONCERT GO/i)).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
        expect(screen.getByRole('button', {
            name: /read more/i
          })).toBeInTheDocument()
        expect(screen.getByRole('button', {
            name: /login/i
          })).toBeInTheDocument()
    })
})