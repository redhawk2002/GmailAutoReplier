const { google } = require("googleapis");

async function sendReply(auth, email, replyText) {
  const gmail = google.gmail({ version: "v1", auth });

  const replyMessage = {
    userId: "me",
    resource: {
      raw: Buffer.from(
        `To: ${
          email.payload.headers.find((header) => header.name === "From").value
        }\r\n` +
          `Subject: Re: ${
            email.payload.headers.find((header) => header.name === "Subject")
              .value
          }\r\n` +
          `Content-Type: text/plain; charset="UTF-8"\r\n` +
          `Content-Transfer-Encoding: 7bit\r\n\r\n` +
          `${replyText}\r\n`
      ).toString("base64"),
    },
  };

  await gmail.users.messages.send(replyMessage);
}

module.exports = {
  sendReply,
};
