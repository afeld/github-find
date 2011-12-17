chrome.tabs.onUpdated.addListener(function(){
  chrome.tabs.executeScript(null, {file: "content_script.js"});
});