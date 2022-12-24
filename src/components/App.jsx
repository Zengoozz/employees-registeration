import { useState } from 'react';

import '../css/App.css';
import '@fontsource/public-sans';
import ActionBar from './ActionBar';
import UsersList from '../features/users/UsersList';
import NavBar from './NavBar';
import StatusBar from './StatusBar';

function App() {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div className="app__full">
      <NavBar />
      <div className="app__part">
        <div className='header'>
          <StatusBar />
        </div>
        <div className="app-body">
          <ActionBar handleToggle={handleToggle} />
          <UsersList handleToggle={handleToggle} toggle={toggle} />
        </div>
      </div>
    </div>
  );
}

export default App;
