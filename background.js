async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let tab = await chrome.tabs.query(queryOptions);
  return tab;
}

function showActions() {
  document.querySelectorAll('a').forEach(el => {el.style.textDecoration="underline"});
  document.querySelectorAll('button').forEach(el => {el.style.border="4px solid black"});
}


chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target:  { tabId: tab.id },
    function: showActions
  });
});
