// let n = 4;
// console.log("*".repeat(n));
// for (let i = 1; i <= n - 2; i++) {
//   console.log("*" + " ".repeat(n - 2) + "*"); 
// }
// console.log("*".repeat(n));
//-------------------------------------------------------------------------------------------
// let n = 5;
// let num = 1;
// for (let i = 1; i <= n; i++) {
//   let row = " ".repeat(n - i); 
//   for (let j = 1; j <= i; j++) {
//     row += num + " "; 
//     num++; 
//   }
//   console.log(row.trim()); 
// }
//-------------------------------------------------------------------------------------------
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = " ".repeat(n - i);
//   for (let j = 1; j <= i; j++) {
//     row += (j % 2 === 0 ? "0" : "1") + " ";
//   }
//   console.log(row.trim());
// }
//--------------------------------------------------------------------------------------------
// let n = 10; 
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     if (j === 1 || j === n || j === i || j === n - i + 1) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }
//----------------------------------------------------------------------------------------
// let n = 6; 
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i + 1; j++) {
//     row += i + " ";
//   }
//   console.log(row.trim()); 
// }
//----------------------------------------------------------------------------------------
