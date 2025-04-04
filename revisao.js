/*questão 1
let n1 = 0
let n3 = 0
let soma = 0
let somar = parseFloat(prompt('Digite quantos números você quer somar:'));

do{
    let n3 = parseFloat(prompt('digite seu número '));
    soma = soma + n3
    console.log(soma + n3)
    n1 = n1 + 1
}
while(somar > n1);*/

/*questão 2
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
stop();*/

//questão 3
let j = parseFloat(prompt('digite os gastos mensais de janeiro:'));
let f = parseFloat(prompt('digite os gastos mensais de fevereiro:'));
let m = parseFloat(prompt('digite os gastos mensais de março:'));
let a = parseFloat(prompt('digite os gastos mensais de abril:'));
let ma = parseFloat(prompt('digite os gastos mensais de maio:'));
let ju = parseFloat(prompt('digite os gastos mensais de junho:'));
let jul = parseFloat(prompt('digite os gastos mensais de julho:'));
let ag = parseFloat(prompt('digite os gastos mensais de agosto:'));
let s = parseFloat(prompt('digite os gastos mensais de setembro:'));
let o = parseFloat(prompt('digite os gastos mensais de outubro:'));
let n = parseFloat(prompt('digite os gastos mensais de novembro:'));
let d = parseFloat(prompt('digite os gastos mensais de dezembro:'));

let soma = 0 

somar = j+f+m+a+ma+ju+jul+ag+s+o+n+d
console.log("seu total de gastos do ano foi:");
console.log(somar);

let ja = parseFloat(prompt('digite os ganhos de janeiro:'));
let fe = parseFloat(prompt('digite os ganhos  de fevereiro:'));
let mar = parseFloat(prompt('digite os ganhos  de março:'));
let ab = parseFloat(prompt('digite os ganhos  de abril:'));
let mai = parseFloat(prompt('digite os ganhos de maio:'));
let jun = parseFloat(prompt('digite os ganhos  de junho:'));
let julh = parseFloat(prompt('digite os ganhos  de julho:'));
let ago = parseFloat(prompt('digite os ganhos  de agosto:'));
let se = parseFloat(prompt('digite os ganhos  de setembro:'));
let ou = parseFloat(prompt('digite os ganhos  de outubro:'));
let no = parseFloat(prompt('digite os ganhos de novembro:'));
let de = parseFloat(prompt('digite os ganhos de dezembro:'));

let somas = 0


    somas = ja+fe+mar+ab+mai+jun+julh+ago+se+ou+no+de
    console.log ( 'Seu total de Gastos do Ano foi de:' );
    console.log ( somas );

let saldo = 0

    saldo = somar --- somas
    console.log ( 'Seu total de Saldo do Ano foi de:' );
    console.log ( saldo );

   if (saldo > 0){ ('Você teve lucro')
   }else if (saldo === 0){
    console.log ( 'Você não ganhou nada')
   } else{
    console.log ( 'Você teve prejuízo')
   } 