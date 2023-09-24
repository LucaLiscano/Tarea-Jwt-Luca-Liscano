import jwt from "jsonwebtoken";

const VerificarToken = (token) => {
  if (token) {
    const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    return {
      login: true,
      data: decode,
    };
  } else {
    return {
      login: false,
      data: "error",
    };
  }
};

export { VerificarToken };
