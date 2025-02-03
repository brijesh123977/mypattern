for (let i=1; i<=4; i++) {
  let row = " ".repeat(4 - i); 
  for (let j=i; j>=1; j--) {
    row = row + j;
  }
  for (let k=2; k<=i; k++) {
    row = row + k;
  }
  console.log(row);
}
for (let i=4-1; i>=1; i--) {
  let row = " ".repeat(4 - i);
  for (let j=i; j>=1; j--) {
    row = row + j;
  }
  for (let k=2; k<=i; k++) {
    row = row + k;
  } 
  console.log(row);
}
