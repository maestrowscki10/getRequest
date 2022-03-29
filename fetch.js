function simpleHTTP() {
    this.http = new XMLHttpRequest()

}


simpleHTTP.prototype.get = function (url,callback) {
    
this.http.open.get('GET','url',true)
this.http.onload =  ()=>{
    if (this.http.status=== 200){
        console.log(this.http.responseText);
    }
}
this.http.send()
}