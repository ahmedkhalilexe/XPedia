const { Server } = require("socket.io");

const socketInit = (server) => {
  const io = new Server(server);
  io.on("connection", (socket) => {
    socket.on("joinConversation", ({ convesationId }) => {
      socket.join(convesationId);
    });
    socket.on("message", ({ convesationId, userId, body }) => {
      // Save message to database
      // Emit message to conversation
      socket.to(convesationId).emit("message", { userId, body });
    });
  });
};

module.exports = socketInit;
