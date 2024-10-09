/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export const USER_ROLE = {
  user: 'user',
  admin: 'admin',
} as const;


export interface TUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'admin' | 'user';
  address: string;
}

export interface UserModel extends Model<TUser> {
  // instance methods checking if the user exists
  isUsersExistsByCustomId(email: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
