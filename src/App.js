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
         <Employee name="Kevin" role="Cross platform app developer"/>
         <Employee name="Naomi"/>
         <Employee name="Annie"/>
        </>
        :
        <p>You cannot see any employees from here!</p>
      }
    </div>
  );
}

export default App;
