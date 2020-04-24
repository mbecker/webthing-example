console.log("app.js loaded");

let messages = document.getElementById("messages");
const addMessage = (msg) => {
    messages.innerHTML += "\n" + msg;
}

let ws;
ws = new WebSocket(`ws://localhost:8888/1`);
ws.onerror = function () {
    console.log('WebSocket error');
};
ws.onopen = function () {
    console.log('WebSocket connection established');
    ws.send('Hello World!');
};
ws.onclose = function () {
    console.log('WebSocket connection closed');
    ws = null;
};
ws.onmessage = function (msg) {
    console.log(msg);
    addMessage(JSON.stringify(msg.data))
}