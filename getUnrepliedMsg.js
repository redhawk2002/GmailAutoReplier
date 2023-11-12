const { google } = require("googleapis");

async function getUserMessages(auth) {
  try {
    const gmail = google.gmail({ version: "v1", auth });
    const result = await gmail.users.messages.list({
      userId: "me",
      labelIds: ["INBOX"],
      q: "is:unread",
    });

    const messages = result.data.messages;
    return messages;
  } catch (error) {
    throw error;
  }
}

module.exports = { getUserMessages };
