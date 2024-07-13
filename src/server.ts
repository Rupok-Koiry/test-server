import { Server } from 'http';
import app from './app';

let server: Server;

/**
 * Main function to establish database connection and start the server.
 */
async function main() {
  try {
    const PORT = process.env.PORT || 8000;
    // Start the server and listen on the specified port from the configuration.
    server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (err) {
    // Log any errors that occur during database connection or server startup.
    console.log(err);
  }
}

// Execute the main function to initiate the application.
main();

/**
 * Handle unhandled promise rejections.
 * Gracefully shut down the server if an unhandled rejection occurs.
 */
process.on('unhandledRejection', () => {
  console.log(`😈 Unhandled rejection is detected, shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

/**
 * Handle uncaught exceptions.
 * Immediately shut down the application if an uncaught exception occurs.
 */
process.on('uncaughtException', () => {
  console.log(`😈 Uncaught Exception is detected, shutting down ...`);
  process.exit(1);
});
