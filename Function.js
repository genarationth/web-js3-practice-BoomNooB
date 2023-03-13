const hello = (firstName , location , hobby) =>{
    console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby);
}

hello("Boom","Thailand","Golf")

// ## Create function following below :</br>
// add(a, b)</br>
// subtract(a, b)</br>
// multiply(a, b)</br>
// divide(a, b)</br>

const add = (a, b)=>{
    console.log(a+b);
    return a+b;
}

const subtract = (a, b)=>{
    console.log(a-b);
    return a-b;
}

const multiply = (a, b)=>{
    console.log(a*b);
    return a*b;
}

const divide = (a, b)=>{
    console.log(a/b);
    return a/b;
}

add(6,9);
subtract(6,9);
multiply(6,9);
divide(6,9);