// server.js
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { google } = require("googleapis"); // Add this line to import 'google' object
const { getUserMessages } = require("./getUnrepliedMsg");
const { getAuth } = require("./authService");
const { createLabel } = require("./label");
const { getMessageData } = require("./unreadMsgData");
const { sendReply } = require("./reply");
const { addLabelToMessage } = require("./labelShift");
// Load environment variables from config.env
dotenv.config({ path: path.join("./config.env") });

const app = express();

app.get("/", async (req, res) => {
  try {
    // Authentication using the separate module
    const auth = await getAuth();
    res.json({ Auth: auth });

    // Create label name 'Vacation'
    const labelId = await createLabel(auth, "Vacation");

    // Function to handle checking and replying to emails
    const checkAndReply = async () => {
      // Find unreplied messages
      const messages = await getUserMessages(auth);

      // Fetch detailed message data and send replies
      const gmail = google.gmail({ version: "v1", auth });
      if (messages && messages.length > 0) {
        for (const message of messages) {
          const messageData = await getMessageData(auth, message.id);
          const email = messageData.data;

          const replyText =
            "*This is an automatic generated message from my project*\nOut of office: On vacation until November 13, 2023. Will respond upon return. Thank you!";
          await sendReply(auth, email, replyText);

          // Add label to the email
          await addLabelToMessage(auth, message.id, labelId);
        }
      }
    };

    // Set interval for checking and replying to emails
    const autoMailReply = setInterval(
      checkAndReply,
      Math.floor(Math.random() * (120 - 45 + 1) + 45) * 1000
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
