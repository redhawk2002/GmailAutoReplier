const { google } = require("googleapis");

async function createLabel(auth, labelName) {
  const gmail = google.gmail({ version: "v1", auth });

  try {
    const response = await gmail.users.labels.create({
      userId: "me",
      requestBody: {
        name: labelName,
        labelListVisibility: "labelShow",
        messageListVisibility: "show",
      },
    });

    return response.data.id;
  } catch (error) {
    if (error.code === 409) {
      const response = await gmail.users.labels.list({
        userId: "me",
      });
      const label = response.data.labels.find(
        (existingLabel) => existingLabel.name === labelName
      );
      return label.id;
    } else {
      throw error;
    }
  }
}

module.exports = { createLabel };
