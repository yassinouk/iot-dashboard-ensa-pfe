const HOST = "localhost";
const PORT = 5678;

const socket: WebSocket = new WebSocket(`ws://${HOST}:${PORT}`);

export default socket;
