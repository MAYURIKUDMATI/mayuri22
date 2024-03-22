

// shallow copy

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
  };
  
  console.log("Employee =>", employee);
  
  let newEmployee = employee; // Shallow copy
  console.log("New Employee =>", newEmployee);
  
  console.log("---------After modification----------");
  newEmployee.ename = "Beck"; // Modify the name
  console.log("Employee =>", employee); // Both objects reflect the change
  console.log("New Employee =>", newEmployee);