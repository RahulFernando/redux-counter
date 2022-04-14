import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.isLogged);

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(login());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
