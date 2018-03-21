(function() {

var languageSelector = document.getElementById('languageSelector');
var languagesContainer = document.getElementById('languagesContainer');
var awesome = new Awesomplete(languageSelector, { list: SUGGESTED_LANGUAGES });
var renderLanguages = function(languages) {
    for (var i = 0; i < languages.length; i++) {
        var btn = document.createElement('button');
        btn.className = 'language';
        btn.innerHTML = languages[i];
        languagesContainer.appendChild(btn);
    }
};

chrome.storage.sync.get({languages: []}, function (storage) {
    renderLanguages(storage.languages);
});

document.getElementById("save").addEventListener('click', function() {
    console.log('input changed to: ', languageSelector.value);
    chrome.storage.sync.get({languages: []}, function(storage) {
        console.log(storage);
        var languages = storage.languages;
        languages.push(languageSelector.value);
        chrome.storage.sync.set({languages: languages});
        languagesContainer.innerHTML = "";
        renderLanguages(languages);
    });
});

document.getElementById("clear").addEventListener('click', function() {
    languagesContainer.innerHTML = "";
    chrome.storage.sync.set({languages: []});
});

})();