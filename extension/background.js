chrome.browserAction.onClicked.addListener(function(tab) {
  if (tab.url && tab.url.startsWith("http")) {
    chrome.tabs.update(tab.id, {url: "https://web.archive.org/web/" + tab.url})
  }
});
