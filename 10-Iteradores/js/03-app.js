//Fizz Buzz
for(let i = 0; i < 100; i++){ 
    if(i % 5 === 0 && i % 3 === 0){
        console.log(`${i} Fizz Buzz`)
        continue;
    }else if(i % 5 === 0){
        console.log(`${i} Buzz`)
        continue;
    }else if(i % 3 === 0){
        console.log(`${i} Fizz`)
        continue;
    }
    console.log(`El numero:${i} no es multiplo de ninguno.`)
}