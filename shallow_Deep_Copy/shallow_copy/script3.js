let employee = {
    eid : "E102",
    ename : "jack",
    eaddress : "New york",
    sallary : 50000

};

console.log("employee =>" ,employee);

let newemployee = employee;

console.log("newemployee=>", newemployee);

console.log("-----------After modification-----------")
newemployee.eaddress = "uk";

console.log("employee =>", employee);
console.log("New employee =>",newemployee);
