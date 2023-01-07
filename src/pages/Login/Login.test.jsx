import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Login from './Login'
import {BrowserRouter as Router} from 'react-router-dom';

describe('Login', () => {
    test('test basic render', async () => {
        render(
            // wrap component that uses useNavigate in Router
            <Router>
                <Login />
            </Router>
        )
        // screen.debug()
        screen.getByTestId('email')
        expect(screen.getByRole('button')).not.toBeDisabled 
        //check button disabled then in change checbox and determin value then cheak button not disabled
        // expect(screen.getByRole('button')).toBeDisabled();
        // await waitFor(()=> fireEvent.click(screen.getByRole('checkbox')))
        // expect(screen.getByRole('button')).not.toBeDisabled();
        // to access attribute value when change
        // fireEvent.change(screen.getByTestId('email'), {target: {value: 'nour@gmail.com'}})
        // expect(screen.getByTestId('email')).toHaveAttribute('value', 'nour@gmail.com')
    })
})
