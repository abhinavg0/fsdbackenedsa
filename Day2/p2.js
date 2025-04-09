const http=reqire('http');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1 style='background-color:black;color:white;')Hello WOrld
})