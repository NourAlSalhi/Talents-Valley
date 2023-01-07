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
    })
})