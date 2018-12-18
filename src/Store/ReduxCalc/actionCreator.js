export const addCalculator = data => {
  return {
    type: "ADD",
    result: `addition of ${data.num1} and ${data.num2} is : ${parseInt(
      data.num1
    ) + parseInt(data.num2)}`
  };
};
export const substractcalc = data => {
  return {
    type: "SUBSTRACT",
    result: `substraction of ${data.num1} and ${data.num2} is : ${parseInt(
      data.num1
    ) - parseInt(data.num2)}`
  };
};
export const dividecalc = data => {
  return {
    type: "DIVIDE",
    result: `division of ${data.num1} and ${data.num2} is ${parseFloat(
      data.num1
    ) / parseFloat(data.num2)}`
  };
};
export const multiplyCalc = data => {
  //   let result = "";
  //   if (data.num1 === 0 || data.num2 === 0) {
  //     result = `num1 or num2 should not be 0`;
  //   } else {
  //     result = `multiplication of ${data.num1} and ${data.num2} is : ${parseInt(
  //       data.num1
  //     ) * parseInt(data.num2)}`;
  //   }
  return {
    type: "MULTIPLY",
    result:
      data.num1 === 0 || data.num2 === 0
        ? `num1 or num2 should not be 0`
        : `multiplication of ${data.num1} and ${data.num2} is : ${parseInt(
            data.num1
          ) * parseInt(data.num2)}`
  };
};
