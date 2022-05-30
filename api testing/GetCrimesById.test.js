const axios = require("axios");
const config = require("./config.json")

let url = config.url;
let accessToken = config.accessToken;
let incorrectURL = config.incorrectURL;

test('GET /v1/my-guard-users/users/:id/crimes should throw 401 when token is invalid', async () => {
  await axios.get(`${url}/${config.testUser.id}/crimes`, { headers: { Authorization: `Bearer ${accessToken}` } })
    .catch((error) => expect(error.response.status).toBe(401));
});

test('GET /v1/my-guard-users/users/:id/crimes should throw 401 when token is not exist', async () => {
  await axios.post(`${url}/${config.testUser.id}/crimes`)
    .catch((error) => expect(error.response.status).toEqual(401));
});

test('GET /v1/my-guard-users/users/:id/crimes should throw an error message with the correct status property', async () => {
  await axios.get(`${url}/${config.testUser.id}/crimes`)
    .catch((error) => { 
      expect(error.response.data.status).toBe(401);
      expect(error.response.data.status).toBe(error.response.status);
  });
});

test('GET /v1/my-guard-users/users/:id/crimes should throw an error message with the correct status property', async () => {
  await axios.get(`${url}/${config.testUser.id}/crimes`)
    .catch((error) => { 
      expect(error.response.data["Apigee Server"]).toBe("my-guard-users");
  });
});

test('GET /v1/my-guard-users/users/:id/crimes should throw an error message with the correct status property', async () => {
  await axios.get(`${url}/${config.testUser.id}/crimes`)
    .catch((error) => { 
      expect(error.response.data.error).toBe("Unauthorized");
  });
});

test('GET /v1/my-guard-users/users/:id/crimes should throw an error message with the correct status property', async () => {
  await axios.get(`${url}/${config.testUser.id}/crimes`)
    .catch((error) => { 
      expect(error.response.data.message).toBe("Access is denied due to invalid credentials");
  });
});

test('GET /v1/my-guard-users/users/:id/crimes should throw an error message with the correct status property', async () => {
  await axios.get(`${url}/${config.testUser.id}/crimes`)
    .catch((error) => { 
      expect(error.response.data.path).toBe(`/users/${config.testUser.id}/crimes`);
  });
});

test('GET /v1/my-guard-users/users/:id/crimes should throw 404 when an incorrect URL', async () => {
  await axios.get(`${incorrectURL}/${config.testUser.id}/crimes`)
    .catch((error) => expect(error.response.status).toBe(404));
});