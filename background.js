chrome.tabs.onActivated.addListener(tab=> {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^https:\/\/www\.instagram.com/.test(current_tab_info.url)){
            chrome.tabs.executeScript(null, {file: "./foreground.js"});
            chrome.tabs.insertCSS(null, {file: "./style.css"});
            chrome.tabs.insertCSS(null, {file: "./skeleton.css"});
        }
    });
});