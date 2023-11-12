# Auto-Reply Gmail App

## Overview

This Node.js-based application automates responses to emails received in a Gmail mailbox during a user's vacation. It utilizes Google APIs for tasks such as logging in, checking for new emails, sending replies, and managing labels.

## Technical Specifications

### Technologies Used

- **Node.js**: Provides a scalable and efficient server-side environment.
- **Express.js**: Handles HTTP requests and defines routes.
- **Google APIs**: Used for Gmail authentication, fetching messages, sending replies, and managing labels.
- **dotenv**: Loads environment variables from the `config.env` file.

### Code Structure

- **`server.js`**: Main entry point, sets up Express server, handles routes, and orchestrates automated email response.
- **`getUnrepliedMsg.js`**: Module for retrieving unreplied messages.
- **`authService.js`**: Module for handling authentication with Google APIs.
- **`label.js`**: Module for creating a label in Gmail.
- **`unreadMsgData.js`**: Module for fetching detailed data of unread messages.
- **`reply.js`**: Module for sending auto-reply emails.
- **`labelShift.js`**: Module for adding labels to messages.

### Areas for Improvement

- Add error handling and logging to improve robustness.
- Implement unit tests for critical functionalities.
- Enhance user authentication security.
- Consider optimizing the interval timing for checking and replying to emails.
- Provide more user-friendly messages in auto-reply emails.
- Feel free to contribute to the project and address these areas for improvement.

## Contributing to the Project

Feel free to contribute to the project by addressing the identified areas for improvement.

### Demonstration Video

*Update Soon*
