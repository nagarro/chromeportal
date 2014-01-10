var s = document.createElement('script');
s.src = chrome.extension.getURL("chromePortalFix.js");
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.querySelector("head") || document.documentElement).appendChild(s);