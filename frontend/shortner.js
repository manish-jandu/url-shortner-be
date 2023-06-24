
async function checkAndGetShortUrl(text){
    if(!text){
        return null;
    }

    const response = await fetch("http://localhost:4001/api/urls",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            url:text
        })
    });
    const body = await response.json();
    document.getElementById("short-url-text").innerText = body.short_url
    document.getElementById("short-url-text").href = body.short_url
    document.getElementById("orignal-url-text").innerText = body.orig_url
    
}

function onShortUrlBtnClick(){
    console.log("short click")
    const text = document.getElementById("url-short-input-text").value;
    const newUrl = checkAndGetShortUrl(text);
    if(!newUrl){
        //url was empty or BE thrown an error.
    }
}

function onCopyBtnClick(){
    console.log("copy clicked")
}

document.getElementById("short-url-btn").addEventListener("click",onShortUrlBtnClick);
document.getElementById("copy-btn").addEventListener("click",onCopyBtnClick);
console.log("hello world")
