function calculateBMR(weight,height){
    var bmr=weight/Math.pow(height,2);
    return Math.round(bmr);
}
// create list
var list=["deathnote","Attackontitan","Suzume"];
console.log(list.includes("Attackontitan"));
list.push("henry");
list.pop();/*just like stack*/