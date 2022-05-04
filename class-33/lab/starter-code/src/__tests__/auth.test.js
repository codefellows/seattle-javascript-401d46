import { render, screen, fireEvent } from '@testing-library/react';
import AuthProvider, { AuthContext } from '../context/auth';
import Login from '../components/login/Login';
import Auth from '../components/auth/Auth';

test('Should contain user, isloggedIn, and Error values', () => {

  render(
    <AuthProvider>
      <AuthContext.Consumer>
        {auth => (
          <>
            <p data-testid="isLoggedIn">{auth.isLoggedIn.toString()}</p>
            <p data-testid="username">{auth.user.name}</p>
            <p data-testid="auth-error">{auth.error}</p>
          </>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  )

  expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('false');
  expect(screen.getByTestId('username')).toHaveTextContent('');
  expect(screen.getByTestId('auth-error')).toHaveTextContent('');
});

test('Login component should be able to login', () => {

  render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  )

  expect(screen.getByText(/login/i)).toBeInTheDocument();
});


test('Should be able to input a valid user and log in', () => {
  render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );

  let userInput = screen.getByTestId('username');
  let passInput = screen.getByTestId('password');

  fireEvent.change(userInput, { target: { value: 'Administrator'}});
  fireEvent.change(passInput, { target: { value: 'admin' } });
  fireEvent.click(screen.getByText(/login/i));

  expect(screen.getByText(/logout/i)).toBeInTheDocument();
});

test('Auth component should be able to render when logged in', async () => {
  render(
    <AuthProvider>
      <Login />
      <Auth capability="read">
        <p>I am Authorized!!</p>
      </Auth>
    </AuthProvider>
  );

  expect(screen.queryByText(/i am authorized/i)).not.toBeInTheDocument();

  let userInput = screen.getByTestId('username');
  let passInput = screen.getByTestId('password');

  fireEvent.change(userInput, { target: { value: 'Administrator' } });
  fireEvent.change(passInput, { target: { value: 'admin' } });
  fireEvent.click(screen.getByText(/login/i));

  let authorized = await screen.findByText(/i am authorized/i);

  expect(authorized).toBeInTheDocument();
})
