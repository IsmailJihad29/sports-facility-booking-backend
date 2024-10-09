import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model";
import jwt from "jsonwebtoken";
import config from "../../config";

export type TLoginUser = {
  email: string;
  password: string;
};

const loginUserService = async (payload: TLoginUser) => {
  const user = await User.isUsersExistsByCustomId(payload?.email);


  //* check user and password
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");
  }

  const isPasswordMatched = await User.isPasswordMatched(
    payload?.password,
    user?.password
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, "Password do not matched.");
  }

  // Create token and sent to the client
  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });

  return { accessToken, user };
};

export const AuthServices = {
  loginUserService,
};
