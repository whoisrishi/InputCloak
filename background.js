
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, { action: "toggleInput" });
});

// chrome.runtime.onStartup.addListener(() => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         if (tabs.length > 0) {
//             chrome.tabs.sendMessage(tabs[0].id, { action: "toggleInput" });
//         }
//     });
// });