
function checkUrl(text){
    
}

function onShortUrlBtnClick(){
    console.log("short click")
    const text = document.getElementById("url-short-input-text")
}

function onCopyBtnClick(){
    console.log("copy clicked")
}

document.getElementById("short-url-btn").addEventListener("click",onShortUrlBtnClick);
document.getElementById("copy-btn").addEventListener("click",onCopyBtnClick);
console.log("hello world")
