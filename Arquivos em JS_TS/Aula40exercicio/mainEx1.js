const num1 = 10;
const num2 = 10;
function N(x, y) {
    if (x > y) {
        console.log(x,"é maior que", y);
    } else if (y > x){
        console.log(y,"é maior que", x);
    } else {
        console.log("Os dois valores x = ",x,"e","y =",y,"são iguais");
    }
}
N(num1,num2);