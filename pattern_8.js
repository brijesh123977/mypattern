for(let i=1; i<=5; i++){
    a = ''
    for(let j=1; j<=(5-i); j++){
        a = a + " "
    }
    for(let k=1; k<=((2*i)-1); k++){
        a = a +"*"
    }
    console.log(a);
}