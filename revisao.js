/*questão 1
let n1 = 0
let n3 = 0
let soma = 0
let somar = parseFloat(prompt('Digite quantos números você quer somar:'));

do{
    let n2 = parseFloat(prompt('digite seu número '));
    soma = soma + n3
    console.log(soma + n3)
    n1 = n1 + 1
}
while(somar > n1);*/

//questão 2
let intervalo = null;

var timer = function(){
    let count = 10;
    intervalo = setInterval(() =>{
        console.log(count);
        count--
        }, 1000)}

var stop = function(){
    setTimeout(() => {
        clearInterval(intervalo)
        console.log('Lançamento');        
            }, 10000)
    }

timer();
stop();
