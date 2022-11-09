export const generatePassword = (longitud) => {
  const bank = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let random = "";
  for (let i = 0; i < longitud; i++) {
    random += bank.charAt(Math.floor(Math.random() * bank.length));
  }
  return random;
};
