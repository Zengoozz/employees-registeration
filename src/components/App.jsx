import { useState } from 'react';

import '../css/App.css';
import ActionBar from './ActionBar';
import UsersList from '../features/users/UsersList';
import NavBar from './NavBar';

function App() {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div className="app__full">
      <NavBar />
      <div className="app__part">
        <ActionBar handleToggle={handleToggle} />
        <UsersList handleToggle={handleToggle} toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
