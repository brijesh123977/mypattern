for (let i = 5; i >= 1; i--) {
    let a = '';
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i === 5) {
      a = a + "*";
    } 
    else {
      a = a + " ";
    }
  }
  console.log(a);
}
