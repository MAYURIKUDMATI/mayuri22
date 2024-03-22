let employee = {
    eid : "E102" ,
    ename : "Jack" ,
    eaddress : " New York",
    sallary : 50000

};

console.log("employee =>", employee);

console.log("-------Deep Copy---------");
let newemployee = JSON.parse(JSON.stringify(employee));
console.log("employee =>",employee);
console.log("newemployee =>",newemployee);

console.log("---------After Modification-------------");
newemployee.eaddress = "India";
newemployee.sallary = 1000000;
console.log("Employee =>", employee);
console.log("newemployee =>",newemployee)