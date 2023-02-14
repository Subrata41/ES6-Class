
class API{
    #secure;
    url;
    method;
    constructor(url){
        this.url=url;
        if(url.includes("https"))
        this.#secure=true;
        else
        this.#secure=false;
        this.method="GET"
    }
    isSecure(){
        return this.#secure;
    }
    updateUrl(url){
        this.url=url
        if(url.includes("https"))
        this.#secure=true;
        else
        this.#secure=false;
    }
}

module.exports = { API }
