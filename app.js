const http = new simpleHTTP;
const posts = http.get('https://jsonplaceholder.typicode.com/posts')
console.log(posts);