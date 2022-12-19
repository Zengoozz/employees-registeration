import { useState } from 'react';

import './App.css';
import ActionBar from './features/users/ActionBar';
import UsersList from './features/users/UsersList';

function App() {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div className="App">

      <ActionBar handleToggle={handleToggle}/>
      <UsersList handleToggle={handleToggle} toggle={toggle}/>
    </div>
  );
}

export default App;
