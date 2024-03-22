"use strict"; // treat all js code as newer version



// let cityName = "pune";
// let areaName = "kothrud";
// let stritArea = "gujrat colony";
// let pinCode = 123456;
// classes = "codkul";

//  let ugly = false




// console.log(typeof  ugly);

// console.table ([CityName, AreaName, stritArea, pincode, classes ] );




let address = {
    cityname : "pune",
    areaname : "kothrud",
  stritarea : "gujrat colony",
  pincode : 123456,
  classes : "codkul",

  ugly : false

};

// console.log("address",address)



for( let property in address){
    console.log("The property is", property);

    console.table("The property in address is ", address[property]);
}