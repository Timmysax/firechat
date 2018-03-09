// This function simply makes sure the browser/page is completely ready
// before your code is executed
function onReady(callback) {
	(document.readyState === 'interactive' || document.readyState === 'complete') ? callback() : document.addEventListener('DOMContentLoaded', callback);
};

// App logic goes here
function runChatApp() {
    // References to the DOM nodes for important elements
    var messageList = document.getElementById('message-list');
    var chatForm = document.getElementById('chat-form');
    var usernameField = document.getElementById('username-field');
    var messageField = document.getElementById('message-field');
    
    function buildChatElement(chatObject) {
        // Your code for rendering messages goes here
    }

    // Setup firebase database here
    
    chatForm.addEventListener('submit', function(event) {
        // This prevents the default submit behaviour so you can completely
        // control the submission
        event.preventDefault();

        // Your code for submitting messages goes here

        // This stops the page from reloading on submit
        return false;
    });
}    

// Start app on ready!
onReady(runChatApp);
