const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function addMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.innerHTML = `
    <span class="sender">${sender}</span>
    <div class="bubble">${message}</div>
  `;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const message = userInput.value.trim();
  if (message === '') return;

  addMessage(message, 'You');
  userInput.value = '';
  
 
  setTimeout(() => {
    addMessage("Sorry, I'm just a demo. I can't chat back!", 'Chatbot');
  }, 500);
}

userInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
