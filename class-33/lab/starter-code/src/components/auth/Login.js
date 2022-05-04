import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth';
import { When } from 'react-if';

function Login() {

  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    login(username, password);
  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === 'password') setPassword(value);
  }

  return (
    <div id="login-container">
      <When condition={isLoggedIn}>
        <button onClick={logout}>Logout</button>
      </When>

      <When condition={!isLoggedIn}>
        <form id="login-form" onSubmit={handleSubmit}>
          <input
            data-testid="username"
            placeholder="username"
            name='username'
            onChange={handleChange}
          />
          <input
            data-testid="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </When>
    </div>
  )
}

export default Login;
