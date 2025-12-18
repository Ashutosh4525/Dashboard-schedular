import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

// Convert plain password → hashed
export async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

// Compare login password with DB password
export async function comparePassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}
