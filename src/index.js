class Request {
    constructor(url, method = 'GET') {
        this.url = url;
        this.method = method;
        this.#secure = url.startsWith('https') ? true : false;
    }
    
    isSecure() {
        return this.#secure;
    }
    
    updateURL(new_url) {
        this.url = new_url;
        this.#secure = new_url.startsWith('https') ? true : false;
    }
}

const req = new Request('https://example.com');
console.log(req.isSecure()); 
req.updateURL('http://example.com');
console.log(req.isSecure()); 
 


module.exports = { API }
