// background script

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    url: 'https://chat.openai.com/chat'
  });
});
