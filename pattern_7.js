for(let i=5; i>=1; i--){
    a = ''
    for(let j=1; j<=(5-i); j++){
        a = a +" "
    }
    for(let k=1; k<=i; k++){
        a = a + "*"
    }
    console.log(a);
}
