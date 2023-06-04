// WebSocketService.ts
const socket: WebSocket = new WebSocket('ws://localhost:5678');
let receivedData: any[] = []; // Initialize the variable as an empty array
socket.onmessage = (event) => {
    receivedData = [event.data]; // Store the parsed data as a single-element array
    console.log(receivedData);
};

export default socket;