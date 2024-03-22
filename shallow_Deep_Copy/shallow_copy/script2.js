

//  Note 1 : in shallow copy if object 2 is change so that object 1 is also change 
// Note 2 : if you are console to starting mean modification before so ypu have to answer  object 1

let object1 = {
    id : 1,
    employee : "mayuri"
};

console.log(object1.employee)

let object2 = object1;

object2.employee = "Nilu";

console.log(object1.id);
console.log(object2.employee);