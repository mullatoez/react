import './App.css';
import './components/Employee'
import Employee from './components/Employee';

function App() {

  const showEmployees = true;

  return (
    <div className="App">
      {
        showEmployees ? 
        <>
         <Employee />
         <Employee />
         <Employee />
         <Employee />
        </>
        :
        <p>You cannot see any employees from here!</p>
      }
    </div>
  );
}

export default App;
