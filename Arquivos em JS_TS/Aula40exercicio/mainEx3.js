function numero(n = 000){
    if (n % 3 === 0 && n % 5 === 0) { // Obs.: esse deve ser checado primeiro, pois se forem os outros, eles vão executar primeiro e ignorar esse;
        return "FizzBuzz";
    } else if (n % 3 === 0){
        return "Fizz";
    } else if (n % 5 === 0){
        return "Buzz";
    } else {
        return "---"
    }
}

for (let i = 0; i < 101; i++){
    console.log(i, "<>", numero(i));
}