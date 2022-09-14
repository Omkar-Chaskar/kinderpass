import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Omkar",
    lastName: "Chaskar",
    email: "test123@gmail.com",
    password: "test@123",
    address: "alandi road, bhosari, pune",
    company: "Kinderpass",
    dob: "14/02/1999",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
