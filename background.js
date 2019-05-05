
function get_search_term_yahoo(url){
    return url.split('?')[1].split('&')[0].split('=')[1];
}

var callback = function(details) {
    if ((details.url).includes("https://www.google.com/search?q=")){     
        return {redirectUrl: details.url.replace("google", "bing")};
    }
    if ((details.url).includes("https://search.yahoo.com/")){
        var search_term = get_search_term_yahoo(details.url);
        return {redirectUrl: "https://www.bing.com/search?q=" + search_term};
    }
}

chrome.webRequest.onBeforeRequest.addListener(callback, {urls: ["<all_urls>"]}, ["blocking"]);
