import { useState } from 'react';
import Form from './components/Form'
import Display from './components/Display'





function App() {

const [allUsers, setAllUsers] = useState([])

const addNewUser = (newUserObj) => {
  const newUsersArray = [...allUsers];
  newUsersArray.push(newUserObj);
  setAllUsers(newUsersArray);
}

  return (
    <div>
      <Form addNewUser={addNewUser}/>
      <Display allUsers={allUsers}/>

    </div>
  );
}

export default App;
