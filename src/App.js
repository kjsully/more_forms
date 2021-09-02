import { useState } from 'react';
import Form from './components/Form'
import Display from './components/Display'





function App() {

const [loggedUsers, setLoggedUsers] = useState([])

  return (
    <fieldset>
      <Form setLoggedUsers={setLoggedUsers} loggedUsers={loggedUsers}/>
      {
        loggedUsers.map((user, i) => <Display key={i} user={user} /> )
      }
    </fieldset>
  );
}

export default App;
