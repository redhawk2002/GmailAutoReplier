const { google } = require("googleapis");

const getMessageData = async (auth, messageId) => {
  const gmail = google.gmail({ version: "v1", auth });

  const messageData = await gmail.users.messages.get({
    userId: "me",
    id: messageId,
  });

  return messageData;
};

module.exports = { getMessageData };
