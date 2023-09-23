const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value;
    if (message.trim() !== '') {
        displayMessage('user', message);
        userInput.value = '';
        // Send the user message to the backend for processing and retrieve the response
        // Update the display with the response message using displayMessage('bot', response);
    }
}

function displayMessage(sender, message) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', sender === 'user' ? 'user' : 'bot');
    messageContainer.innerText = message;
    chatLog.appendChild(messageContainer);
    chatLog.scrollTop = chatLog.scrollHeight;
}
