for (let i = 1; i <= 5; i++) {
    let a = "";
    for (let j = i; j < 5; j++) {
      a = a + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        a = a + "*";
      } else {
        a = a + " ";
      }
    }
    console.log(a);
}

for (let i = 5 - 1; i >= 1; i--) {
    let a = "";
    for (let j = 5; j > i; j--) {
      a = a + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1) {
        a = a + "*";
      } else {
        a = a + " ";
      }
    }
    console.log(a);
}
