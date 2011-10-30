var REPO_REGEX = new RegExp("://github\.com/[^/]+/.+");

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If we are inside of a repo
  if (tab.url.match(REPO_REGEX)){
    // ... show the page action.
    chrome.pageAction.show(tabId);
  }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
