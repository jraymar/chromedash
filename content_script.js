console.log('test');
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("received request");
    console.log(message);
    if (request.method == "getSelection")
        sendResponse({data: window.getSelection().toString()});
    else
        sendResponse({}); // snub them.
});