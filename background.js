chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(
        tab.id,
        { "message" : "getSelection" },
        function(response) {
            console.log("received response");
        }
    );
});

chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query(
        { currentWindow: true, active: true },
        function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                { "message" : "getSelection" },
                function(response) {
                    chrome.storage.sync.get({languages: []}, function(storage) {
                        var query = "dash-plugin://query=" + encodeURI(response.data);
                        if(storage.languages.length > 0) {
                            query += "&keys=" + encodeURI(storage.languages.join(','));
                        }
                        chrome.tabs.update(
                            { url: query}
                        );
                    });
                }
            );
        }
    );
});