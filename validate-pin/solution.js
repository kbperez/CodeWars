function validatePIN (pin) {
  //return true or false
  if (pin.length === 4 || pin.length === 6) {
    if (/\D/.test(pin)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
