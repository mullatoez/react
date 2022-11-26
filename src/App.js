import "./index.css";
import "./components/Employee";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const showEmployees = true;
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Kevin",
      role: "Cross platform app developer",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      id: 2,
      name: "John",
      role: "DevOps",
      img: "https://images.pexels.com/photos/6626882/pexels-photo-6626882.jpeg",
    },
    {
      id: 3,
      name: "Rosanne",
      role: "Front-end developer",
      img: "https://images.pexels.com/photos/7013617/pexels-photo-7013617.jpeg",
    },
    {
      id: 4,
      name: "Wayne",
      role: "Angular dev",
      img: "https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg",
    },
    {
      id: 5,
      name: "Kaka",
      role: "Spring Boot developer",
      img: "https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg",
    },
    {
      id: 6,
      name: "Sonny Saggha",
      role: "React-Native developer",
      img: "https://images.pexels.com/photos/7148620/pexels-photo-7148620.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    console.log("Inside the app.js file");
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

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
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
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
