chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab);
});

chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query(
        { currentWindow: true, active: true },
        function (tabs) {
            console.log(tabs);
            chrome.tabs.sendMessage(
                tabs[0].id,
                { "message" : "getSelection" },
                {},
                function(response) {
                    console.log("received response");
                }
            );
        }
    )
});