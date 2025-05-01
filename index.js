

let num = 0.1 + 0.2; // 0.30000000000000004

let fixedNum = Number(num.toFixed(1)) // 0.3

switch(fixedNum){
    case 0.3:
        console.log("num is 0.3");
        break;
    case 0.4:
        console.log("num is 0.4");
        break;
    default:
        console.log("num is not 0.3 or 0.4");
        break;
}