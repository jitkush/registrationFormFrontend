import { postRequest } from "./helper/post";
import { getRequest } from "./helper/get";
let newOrder = "http://localhost:3000/order/add-order";
let token = "abc";
let header =
  ("Content-Type: application/json", `Authorization: Bearer ${token}`);
export const addOrder = async (data) => {
  let response = await postRequest(newOrder, header, data);
  return response;
};

export const getOrder = async (userId) => {
  let getUrl = `http://localhost:3000/order/${userId}`;
  let response = await getRequest(getUrl, header);
  return response;
};
