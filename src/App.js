import './App.css';
import './components/Employee'
import Employee from './components/Employee';
import { useState } from 'react';

function App() {

  const showEmployees = true;
  const [role, setRole] = useState();

  return (
    <div className="App">
      {
        showEmployees ? 
        <>
        <input 
        type="text" 
        onChange={(el) => {
          console.log(el.target.value)
          setRole(el.target.value);
        }}
         />
         <Employee name="Kevin" role="Cross platform app developer"/>
         <Employee name="Naomi" role={role}/>
         <Employee name="Annie"/>
        </>
        :
        <p>You cannot see any employees from here!</p>
      }
    </div>
  );
}

export default App;
