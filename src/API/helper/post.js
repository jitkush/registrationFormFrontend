import axios from "axios";

export const postRequest = async (url, header, data) => {
  let response = null;
  const request = {
    method: "post",
    header: header,
    url: url,
    data: data,
  };

  await axios(request).then(
    (res) => {
      return (response = res.data);
    },
    (error) => {
      return (response = error.response);
    }
  );

  return response;
};
