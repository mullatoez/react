import "./index.css";
import "./components/Employee";
import Employee from "./components/Employee";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
  const showEmployees = true;
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
    {
      name: "Kevin",
      role: "Cross platform app developer",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      name: "John",
      role: "DevOps",
      img: "https://images.pexels.com/photos/6626882/pexels-photo-6626882.jpeg",
    },
    {
      name: "Rosanne",
      role: "Front-end developer",
      img: "https://images.pexels.com/photos/7013617/pexels-photo-7013617.jpeg",
    },
    {
      name: "Wayne",
      role: "Angular dev",
      img: "https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg",
    },
    {
      name: "Kaka",
      role: "Spring Boot developer",
      img: "https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg",
    },
    {
      name: "Sonny Saggha",
      role: "React-Native developer",
      img: "https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg",
    },
  ]);

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(el) => {
              console.log(el.target.value);
              setRole(el.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(employee);
              return(
              <Employee
                key={uuidv4()}
                name={employee.name}
                role={employee.role}
                img={employee.img}
              />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see any employees from here!</p>
      )}
    </div>
  );
}

export default App;
