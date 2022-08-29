const test = .69;
const change = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
};


const CoinCounter = (counter) => {
  const bigNum = test*100;
  if (counter >= bigNum) {
    console.log(counter/100);
    return counter;
  } else if (counter + 25 <= bigNum) {
    console.log(counter);
    change.quarters += 1;
    return CoinCounter(counter + 25);
  } else if (counter + 10 <= bigNum) {
    console.log(counter);
    change.dimes += 1;
    return CoinCounter(counter + 10);
  } else if (counter + 5 <= bigNum) {
    // console.log(counter);
    change.nickels += 1;
    return CoinCounter(counter + 5)
  } else if (counter + 1 <= bigNum) {
    // console.log(counter);
    change.pennies += 1;
    return CoinCounter(counter + 1);
  } else {
    console.log(counter);
  }
  }



CoinCounter(0);
console.log(change);







// const test = .15;
// const change = {
//   quarters: 0,
//   dimes: 0,
//   nickels: 0,
//   pennies: 0
// };


// const CoinCounter = (counter) => {
//   if (counter >= test) {
//     return counter;
//   } else if (counter + .25 <= test) {
//     console.log(counter);
//     change.quarters += 1;
//     return CoinCounter(counter + .25);
//   } else if (counter + .1 <= test) {
//     console.log(counter);
//     change.dimes += 1;
//     return CoinCounter(counter + .10);
//   } else if (counter + .04 <= test) {
//     console.log(counter);
//     change.nickels += 1;
//     return CoinCounter(counter + 0.050)
//   // } else if (counter + .01 <= test) {
//   //   console.log(counter);
//   //   change.pennies += 1;
//     // return CoinCounter(counter + .01);
//   // } else {
//   //   console.log(counter);
//   // }
//   }
// }






