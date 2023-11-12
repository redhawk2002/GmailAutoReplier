// authService.js
const { authenticate } = require("@google-cloud/local-auth");
const path = require("path");

async function getAuth() {
  try {
    const auth = await authenticate({
      keyfilePath: path.join(__dirname, "Credentials.json"),
      scopes: [
        "https://www.googleapis.com/auth/gmail.readonly",
        "https://www.googleapis.com/auth/gmail.send",
        "https://www.googleapis.com/auth/gmail.labels",
        "https://mail.google.com/",
      ],
    });

    return auth;
  } catch (error) {
    throw error;
  }
}

module.exports = { getAuth };
