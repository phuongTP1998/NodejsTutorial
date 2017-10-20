console.log("Working with file");
var fileManager = require('./src/fileManager');
const fileName = __dirname + '/data/temp.txt';
fileManager.createNewFile(fileName);
let jsonObject ={
    foods: [
        {
            foodName: "Cream Tea",
            foodDescription: "This is a cup of cream tea"
        },
        {
            foodName: "Japanese Salad",
            foodDescription: "Very delicious"
        }
    ], resultCode : 200,
       restaurantName: "Sasimi BBQ"
};
// fileManager.saveJsonObjectToFile(jsonObject,fileName);
jsonObject.address = "73 Khu 2 Dai Phuc";
fileManager.saveJsonObjectToFile(jsonObject,fileName);
fileManager.readJsonObjectFromFile(fileName);