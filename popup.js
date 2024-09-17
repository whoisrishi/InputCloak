document.getElementById("clickMe").addEventListener('click', () => {

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {action: "toggleInput"});
    });
});


document.addEventListener("DOMContentLoaded", ()=>{
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, {action: "toggleInput"});
            });
})