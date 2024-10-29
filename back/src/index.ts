import app from "./Server";
import logger from "jet-logger";

// Start the server
const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
  logger.info("Express server started on port: " + port);
});
