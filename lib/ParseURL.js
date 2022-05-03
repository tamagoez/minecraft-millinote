export default function ParseURL(url, locationhref) {
  // Use like: ParseURL("./tag", "/en/Commands")
  // It will return "/en/Commands/tag"
  //
  // ./article (need locationhref)
  //     => {locationhref}/article
  // article (need locationhref)
  //     => {locationhref}/article
  // article/1 (need locationhref)
  //     => {locationhref}/article/1
  // /article
  //     => /article
  // google.com
  //     => google.com
  
  function clog(before, after) {
    console.log("[ParseURL] " + before + " => " + after)
  }
  
  if (url.indexOf('./') != -1) {
    // https://www.sejuku.net/blog/21155
    const cuturl = url.substr(2);
    const returnurl = locationhref + "/" + cuturl
    clog(url, returnurl)
    return returnurl
  } else {
    if (url.indexOf('.') != -1) {
      clog(url, url)
      return url
    } else {
      if (url.substr(0,1) === "/") {
        clog(url, url)
        return url
      } else {
        const returnurl = locationhref + "/" + url
        clog(url, returnurl)
        return returnurl;
      }
    }
  }
}
