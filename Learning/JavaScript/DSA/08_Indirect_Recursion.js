let money = 100;
let totalApple = 0
let price = 40;

function buyApple(m) {
    if(m > price){
        buyMore(m)
    } else{
        console.log("Total Apples is =", totalApple, " Money Left is =", money)
    }    
}
function buyMore(x){
    totalApple++
    money -= price
    buyApple(x - price)
}
console.log("Apples is =", totalApple, " Total Money is =", money, " Price is =", price)

buyApple(money)