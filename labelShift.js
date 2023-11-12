const { google } = require("googleapis");

const addLabelToMessage = async (auth, messageId, labelId) => {
  try {
    const gmail = google.gmail({ version: "v1", auth });
    await gmail.users.messages.modify({
      userId: "me",
      id: messageId,
      resource: {
        addLabelIds: [labelId],
        removeLabelIds: ["INBOX"],
      },
    });
  } catch (error) {
    console.error("Error adding label to message:", error);
    throw error;
  }
};

module.exports = {
  addLabelToMessage,
};
