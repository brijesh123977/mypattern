// let rows = 5;
// let pattern = "";
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       if (num === 1 || num === n || n === rows) pattern += "*";
//       else {
//          pattern += " ";
//       }
//    }
//    pattern += "\n";
// }
// console.log(pattern);

//---------------------------------------------------------------------------------------
// function printHollowDiamondStarPattern(n) {
//     for (let i = 1; i <= n; i++) {
//       let row = "";
//       for (let j = i; j < n; j++) {
//         row += " ";
//       }
//       for (let k = 1; k <= (2 * i - 1); k++) {
//         if (k === 1 || k === (2 * i - 1)) {
//           row += "*"; 
//         } else {
//           row += " ";
//         }
//       }
//       console.log(row);
//     }
//     for (let i = n - 1; i >= 1; i--) {
//       let row = "";
//       for (let j = n; j > i; j--) {
//         row += " ";
//       }
//       for (let k = 1; k <= (2 * i - 1); k++) {
//         if (k === 1 || k === (2 * i - 1)) {
//           row += "*"; 
//         } else {
//           row += " "; 
//         }
//       }
//       console.log(row);
//     }
//   }
//   printHollowDiamondStarPattern(5);
//--------------------------------------------------------------------------------------------
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   let num = 1;
//   for (let j = 0; j <= i; j++) {
//     row += num + " ";
//     num = (num * (i - j)) / (j + 1); 
//   }
//   console.log(row.trim());
// }
//-------------------------------------------------------------------------------------
// let n = 4; 
// for (let i = 1; i <= n; i++) {
//   let row = " ".repeat(n - i); 
//   for (let j = i; j >= 1; j--) {
//     row += j;
//   }
//   for (let j = 2; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// }
// for (let i = n - 1; i >= 1; i--) {
//   let row = " ".repeat(n - i);
//   for (let j = i; j >= 1; j--) {
//     row += j;
//   }
//   for (let j = 2; j <= i; j++) {
//     row += j;
//   } 
//   console.log(row);
// }
//------------------------------------------------------------------------------------------
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
