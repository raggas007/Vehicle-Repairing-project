import bcrypt from "bcrypt";

export const generatehashPassword = async (plainPassword) => {
  let saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

  return hashedPassword;
};

export const comparePassword = async (plainPassword, hashedpassword) => {
  const isPasswordmatch = await bcrypt.compare(plainPassword, hashedpassword);

  return isPasswordmatch;
};
