class API {
    constructor(url, method = 'GET') {
        this.url = url;
        this.method = method;
        #secure = url.startsWith("https") ? true : false;
    }

    isSecure() {
        return #secure;
    }

    updateUrl(newUrl) {
        this.url = newUrl;
        #secure = newUrl.startsWith("https") ? true : false;
    }
}

const s = new API('http://api.com/api/hello');
console.log(s.isSecure()); 

s.updateUrl('https://api.com/api/hello');
console.log(s.isSecure()); 

console.log(s.url); 
console.log(s.method); 
console.log(s.secure); 


module.exports = { API }
