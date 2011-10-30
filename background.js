var REPO_REGEX = new RegExp("://github\.com/[^/]+/.+");

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If we are inside of a repo
  if (tab.url.match(REPO_REGEX)){
    // ... show the page action.
    chrome.pageAction.show(tabId);
  }
};

function onClick(tab){
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {action: 'toggleSearchBox'});
  });
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.pageAction.onClicked.addListener(onClick);
