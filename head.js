function setFavicons(favicon){
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favicon);
    document.querySelector('head').appendChild(setFavicon);
}
setFavicons('img/favicon.ico');