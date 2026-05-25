import { devApiUrl } from "../functions-general";
import { devKey } from "../functions-general";

export const queryData = (endpoint, method = "GET", fd = {}) => {
  let url = devApiUrl + endpoint;
  let username = devKey;
  let password = "";
  let auth = btoa(`$username:$password`);
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Basic ${auth}`);
  myHeaders.append("Content-Type", "application/json");

  let options = {
    method,
    headers: myHeaders,
  };

  //stringify the fd object and add it to the body of the request if the method is not GET
  if (method !== "GET") {
    options = {
      ...options,
      body: JSON.stringify(fd),
    };
  }

  const data = fetch(url, options).then((res) => res.json());
  return data;
};
