function onReady(callback) {
	(document.readyState === 'interactive' || document.readyState === 'complete') ? callback() : document.addEventListener('DOMContentLoaded', callback);
};

function runChatApp() {
    var messageList = document.getElementById('message-list');
    var chatForm = document.getElementById('chat-form');
    var usernameField = document.getElementById('username-field');
    var messageField = document.getElementById('message-field');
    
    var DB = firebase.database();
    var messagesRef = DB.ref('/messages');
    
    function buildChatElement(chatObject) {
        var chatElement = document.createElement('li');
        var chatItem = document.createElement('div');
        var usernameElement = document.createElement('span');
        var messageElement = document.createElement('span');
    
        chatItem.className = 'chat-item';
        usernameElement.className = 'username';
        messageElement.className = 'message';

        usernameElement.innerText = chatObject.username + ': ';
        messageElement.innerText = chatObject.message;
    
        chatItem.appendChild(usernameElement);
        chatItem.appendChild(messageElement);
        chatElement.appendChild(chatItem);

        return chatElement;
    }
    
    messagesRef.on('child_added', function(snapshot) {
        var chatObject = snapshot.val();
        var chatElement = buildChatElement(chatObject);
        messageList.appendChild(chatElement);
        messageList.scrollTop = messageList.scrollHeight;
    });
    
    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        var username = usernameField.value.trim();
        var message = messageField.value;
        if (username && message) {
            messagesRef.push({
                username: username,
                message: message
            });
        }

        usernameField.value = username;
        usernameField.setAttribute('disabled', true);
        messageField.value = '';
    
        return false;
    });
}    

onReady(runChatApp);
