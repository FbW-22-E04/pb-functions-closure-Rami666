//1: closures are functions that can access value outside of thier own curly braces

 



function createBase(x){
    return function(y){
        console.log(x+y) 
    }
}

var addSix = createBase(6);
addSix(10); 
addSix(21);





