const fs = require('fs');
const http = require('http');

const server = http.createServer();

//Old method of reading data
server.on("request",(req,res)=>{
    fs.readFile("index.txt",(err,data)=>{
        if(err) return console.log(err);
        res.end(data.toString());
    })
})

//new method of reading data
server.on("request",(req,res)=>{
const rstream = fs.createReadStream('index.txt');
 rstream.on("data",(chunkdata)=>{
    res.write(chunkdata);
 })
 rstream.on("end",()=>{
    res.end();
 });
 rstream.on("error",()=>{
    console.log(err);
    res.end("File not found");
 })
});

server.listen(3000,()=>{
    console.log("Server Listening on port 3000");
})