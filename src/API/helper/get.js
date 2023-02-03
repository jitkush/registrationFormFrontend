import axios from "axios";

export const getRequest = async (url, header, data) => {
  let response = null;
  const request = {
    method: "get",
    header: header,
    url: url,
    data: data,
  };

  await axios(request)
    .then((res) => {
      return (response = res);
    })
    .catch((e) => {
      return (response = e);
    });

  return response;
};
