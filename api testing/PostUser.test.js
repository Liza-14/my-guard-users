const axios = require("axios");
const config = require("./config.json")

let url = config.url;
let accessToken = config.accessToken;
let incorrectURL = config.incorrectURL;

test('POST /v1/my-guard-users/users should throw 403 when does not have enough permissions', async () => {
  await axios.post(url, { headers: { Authorization: `Bearer ${accessToken}` } })
    .catch((error) => expect(error.response.status).toEqual(403));
});

test('POST /v1/my-guard-users/users should throw 403 when does not have enough permissions', async () => {
  await axios.post(url)
    .catch((error) => expect(error.response.status).toEqual(403));
});

test('POST /v1/my-guard-users/users should throw an error message with the correct status property', async () => {
  await axios.post(url)
    .catch((error) => { 
      expect(error.response.data.status).toBe(403);
      expect(error.response.data.status).toBe(error.response.status);
  });
});

test('POST /v1/my-guard-users/users should throw an error message with the correct status property', async () => {
  await axios.post(url)
    .catch((error) => { 
      expect(error.response.data["Apigee Server"]).toBe("my-guard-users");
  });
});

test('POST /v1/my-guard-users/users should throw an error message with the correct status property', async () => {
  await axios.post(url)
    .catch((error) => { 
      expect(error.response.data.error).toBe("Forbidden");
  });
});

test('POST /v1/my-guard-users/users should throw an error message with the correct status property', async () => {
  await axios.post(url)
    .catch((error) => { 
      expect(error.response.data.message).toBe("Does not have enough permissions");
  });
});

test('POST /v1/my-guard-users/users should throw an error message with the correct status property', async () => {
  await axios.post(url)
    .catch((error) => { 
      expect(error.response.data.path).toBe("/users");
  });
});

test('POST /v1/my-guard-users/users should throw 404 when an incorrect URL', async () => {
  await axios.post(incorrectURL)
    .catch((error) => expect(error.response.status).toBe(404));
});

test('POST /v1/my-guard-users/users should throw 400 when field "name" is not specified or the value is empty', async () => {
  await axios.post(url, {secretUserKey: "SUPER_LIZA" })
    .catch((error) => {
    expect(error.response.status).toBe(400);
});
});
