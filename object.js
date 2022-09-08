var mobile = {
    Brand: 'Xiaomi',
    Color: 'White',
    Price: '13000tk',
    Camera: 64,
    Model: 'Note 7 Pro',
    Processor: 'Snap Dragon'
}

mobile.Processor = 'Media tech';
console.log(mobile)
console.log(mobile.Camera)
console.log(mobile.Brand)
// to get keys individually
var modelName = mobile.Model;
console.log(modelName)
// to get keys name as string 
var properties = Object.keys(mobile);
console.log(properties);
// to get values of object as string 
var propertyValues = Object.values(mobile);
console.log(propertyValues);
//  to get keys and values togather 
var propertyName = 'Brand';
var propertyValue = mobile[propertyName];
console.log(propertyName, propertyValue);


// the three was to change the value of any object
// 1
mobile.Price = 39000;
console.log(mobile);
// 2
mobile['Brand'] = 'Samsung';
console.log(mobile);
// 3
var changeColor = 'Color';
mobile[changeColor] = 'Black';
console.log(mobile);

// looping 
for (var i = 0; i < properties; i++) {
    var mobileNames = properties[i];
    var mobileValues = mobile[mobileNames];
    console.log(mobileNames, mobileValues);
}