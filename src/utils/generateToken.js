import jwt from "jsonwebtoken";

const GenerarToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_ACCESS_SECRET);
};

export { GenerarToken };
