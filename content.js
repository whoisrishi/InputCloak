let inputHidden = false;

function hideInput() {
    let forms = document.getElementsByTagName("form");
    for (let i of forms) {
        let inputs = i.getElementsByTagName("input");
        for (let e of inputs) {
            if (e.type === "button" || e.type === "submit") {
                console.log("skipped");
            } else {
                e.style.color = "transparent"; 
                e.style.backgroundColor = "transparent"; 
            }
        }

        let labels = i.getElementsByTagName("label");
        for (let l of labels) {
            l.setAttribute("title", "contentIsHidden");
            l.setAttribute("class", "extension");
        }
    }
}

function showInput() {
    let forms = document.getElementsByTagName("form");
    for (let i of forms) {
        let inputs = i.getElementsByTagName("input");
        for (let e of inputs) {
            e.style.color = "black"; 
            e.style.backgroundColor = "";
        }

        // let labels = i.getElementsByTagName("label");
        // for (let l of labels) {
        //     l.setAttribute("title", "contentIsVisible");
        //     l.removeAttribute("class");
        // }
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggleInput") {
        if (inputHidden) {
            console.log("showInput loaded");
            showInput();
        } else {
            hideInput();
            console.log("hideInput loaded");
        }
        inputHidden = !inputHidden;
    }
});

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("DOM loaded");
//     hideInput(); 
//     inputHidden = true;
// });
