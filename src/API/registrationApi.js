import { postRequest } from "./helper/post";
let addUser = "http://localhost:3000/user/add-user";
let loginUser = "http://localhost:3000/user/login-user";
let token = "abc";
let header =
  ("Content-Type: application/json", `Authorization: Bearer ${token}`);
export const signup = async (data) => {
  let response = await postRequest(addUser, header, data);
  return response;
};

export const login = async (data) => {
  let response = await postRequest(loginUser, header, data);
  return response;
};
