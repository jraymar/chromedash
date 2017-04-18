chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if ("getSelection" == request.message)
        sendResponse({data: window.getSelection().toString()});
    else
        sendResponse({}); // snub them.
});