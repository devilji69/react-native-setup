import {API_URL} from "@env"


// const logMiddleWare = (data) => {
//     // console.log("API CALL\n")
//     console.log(data)
// }

export const getAPI = async (url, headers) => {
  let res = {code: 0, message: 'Somthing went wrong!'};
  if (!headers) {
    headers = {
      'Content-Type': 'application/json',
    };
  }
  return fetch(API_URL + url, {
    method: 'GET',
    headers: new Headers(headers),
  })
    .then(result => result.json())
    .then(result => {
      // logMiddleWare({ TYPE: "SUCCESS", url, headers, response: result})
      return result;
    })
    .catch(err => {
      console.log('Err: ', err);
      return res;
    });
};

export const postAPI = async (url, headers, data) => {
  let res = {code: 0, message: 'Somthing went wrong!'};
  return fetch(API_URL + url, {
    method: 'POST',
    headers: new Headers(headers),
    body: data,
  })
    .then(result => result.json())
    .then(result => {
      if (result?.statusCode && result?.statusCode != 200) {
        result.code = 0;
      }
      return result;
    })
    .catch(err => {
      console.log('Err: ', err);
      return res;
    });
};

export const putAPI = async (url, headers, data) => {
  let res = {code: 0, message: 'Somthing went wrong!'};
  return fetch(API_URL + url, {
    method: 'PUT',
    headers: new Headers(headers),
    body: data,
  })
    .then(result => result.json())
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log('Err: ', err);
      return res;
    });
};

export const patchAPI = async (url, headers, data) => {
  let res = {code: 0, message: 'Somthing went wrong!'};
  return fetch(API_URL + url, {
    method: 'PATCH',
    headers: new Headers(headers),
    body: data,
  })
    .then(result => result.json())
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log('Err: ', err);
      return res;
    });
};
