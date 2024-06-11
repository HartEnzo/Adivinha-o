const aleatorio = Math.floor(Math.random() * 10 + 1);
console.log("Digite um número:");
const Max_tentativas = 5;
let tentativas = 0;
let adivinhar = "";
process.stdin.on("data", function(data) {
adivinhar =data.toString().trim()
if (adivinhar == aleatorio){
console.log("Excelente!!");
process.exit();
}else{
    tentativas++
 if(tentativas == Max_tentativas) {
    console.log("Suas tentativas acabaram!");
    process.exit();
}else {
    const diferenca = Math.abs(aleatorio - adivinhar);
    if (diferenca <= 2) {
        console.log("Quente!");
    }else {
        console.log("Frio!");
    }
}   
}
});
