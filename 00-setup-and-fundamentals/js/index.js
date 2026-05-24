let a2 = 56;
a2 = "Hello";

//Here this works even though we have changed the type of the a2 because it isn't as strict as TypeScript

function add2(a,b){
    return a + b;
}

add2(7,"hey"); // Here type checking isnt being implemented and we can see that it is accepting the addition of a number with a string here.

