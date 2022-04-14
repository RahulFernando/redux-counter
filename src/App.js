import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const authenticated = useSelector((state) => state.auth.isLogged);
  return (
    <Fragment>
      <Header />
      {!authenticated && <Auth />}
      {authenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
