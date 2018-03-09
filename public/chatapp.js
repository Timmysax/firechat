// This function simply makes sure the browser/page is completely ready
// before your code is executed
function onReady(callback) {
	(document.readyState === 'interactive' || document.readyState === 'complete') ? callback() : document.addEventListener('DOMContentLoaded', callback);
};

// App logic goes here
function runChatApp() {
    // Set up references to the DOM nodes for important elements
    
    function buildChatElement(chatObject) {
        // Your code for rendering messages goes here
    }

    function submitHandler(event) {
        // This prevents the default submit behaviour so you can completely
        // control the submission
        event.preventDefault();

        // Your code for submitting messages goes here

        // This stops the page from reloading on submit
        return false;
    }

    // Setup firebase database here
    
    // Setup submit event handler herex
}    

// Start app on ready!
onReady(runChatApp);
