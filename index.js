const EventEmitter = require('events');
class Customer extends EventEmitter{
    constructor(name,gender){
        super();
        this.name =name;
        this.gender = gender;
    }
};
const mrJohn = new Customer("John", "male");
const msMary = new Customer("Mary","female");
// mrJohn.on('eventCallFoods',(foods)=>{
//     for(let index in foods){
//         console.log(`${mrJohn.name} call ${foods[index]}`);
//     }
// });

const callBackFunction = (foods, customer)=>{
    for(let index in foods){
        console.log(`${mrJohn.name} call ${foods[index]}`);
    }
};
mrJohn.on('eventCallFoods',callBackFunction);
msMary.on('eventCallFoods',callBackFunction);
console.log('Do something....');
mrJohn.emit("eventCallFoods",["Pizza","Salad"]);
msMary.emit("eventCallFoods",["Coke","Sushi"]);