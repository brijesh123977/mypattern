let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  let num = 1;
  for (let j = 0; j <= i; j++) {
    row += num + " ";
    num = (num * (i - j)) / (j + 1); 
  }
  console.log(row.trim());
}