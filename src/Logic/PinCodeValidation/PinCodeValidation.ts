const pinCodeValidation = (num: number) => {
  const digits = String(num).split("").map(Number);

  if (!/^\d{6}$/.test(num.toString())) {
    return false;
  }

  for (let i = 0; i < digits.length - 2; i++) {
    if (digits[i] === digits[i + 1] && digits[i] === digits[i + 2]) {
      return false;
    }
  }

  for (let i = 0; i < digits.length - 2; i++) {
    if (
      digits[i] === digits[i + 1] - 1 &&
      digits[i] === digits[i + 2] - 2
    ) {
      return false;
    }

    if (
      digits[i] === digits[i + 1] + 1 &&
      digits[i] === digits[i + 2] + 2
    ) {
      return false;
    }
  }

  let countGroups = 0;
  for (let i = 0; i < digits.length - 3; i++) {
    if (
      digits[i] === digits[i + 1] && 
      digits[i + 2] === digits[i + 3] &&
      digits[i] !== digits[i + 2]
    ) {
      countGroups++;
    }
  }
  if (countGroups >= 2) {
    return false;
  }

  return true
};

export default pinCodeValidation;
