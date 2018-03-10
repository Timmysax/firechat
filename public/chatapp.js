// This function simply makes sure the browser/page is completely ready
// before your code is executed
function onReady(callback) {
	(document.readyState === 'interactive' || document.readyState === 'complete') ? callback() : document.addEventListener('DOMContentLoaded', callback);
};

// App logic goes here
function runChatApp() {
    // Set up references to the DOM nodes for important elements
    var messageList = document.getElementById('message-list');
    var chatForm = document.getElementById('chat-form');
    var usernameField = document.getElementById('username-field');
    var messageField = document.getElementById('message-field');
    
    function buildChatElement(chatObject) {
        // Your code for rendering messages goes here
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

    function submitHandler(event) {
        // This prevents the default submit behaviour so you can completely
        // control the submission
        event.preventDefault();

        // Your code for submitting messages goes here
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

        // This stops the page from reloading on submit
        return false;
    }

    // Setup firebase database here
    var DB = firebase.database();
    var messagesRef = DB.ref('/messages');

    messagesRef.on('child_added', function(snapshot) {
        var chatObject = snapshot.val();
        var chatElement = buildChatElement(chatObject);
        messageList.appendChild(chatElement);
        messageList.scrollTop = messageList.scrollHeight;
    });
    
    // Setup submit event handler here
    chatForm.addEventListener('submit', submitHandler);
}    

// Start app on ready!
onReady(runChatApp);
