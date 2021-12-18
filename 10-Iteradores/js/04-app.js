//While loop
//El while se ejecuta siempre y cuando la condición sea verdadera.
let i = 0;  //Inicializador
while(i <= 40){//Condicion

    console.log(`PAR:${i} ${i % 2 === 0}`);

    i++ //Incremento
} 

/*------------------------------------------------------------------------*/
//La principal diferencia del while y el do while es que el do while se ejecuta y despues hace la comparativa.
let b = 0;
do{
    console.log(`IMPAR: ${b} ${b % 2 === 1 }`)

    b++
}while(b <= 40) //Condicion