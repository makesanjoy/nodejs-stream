const fs = require('fs');
const http = require('http');

const server = http.createServer();
//Comment out each section(1st way,2nd way, etc) and test to see it all gives the same output

//1st Way
//Old method of reading data 
server.on("request",(req,res)=>{
    fs.readFile("index.txt",(err,data)=>{
        if(err) return console.log(err);
        res.end(data.toString());
    })
})

//2nd way
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

//3rd way
server.on("request",(req,res)=>{
const rstream = fs.createReadStream('index.txt');
rstream.pipe(res);  //inside the pipe we put the destination where we want to write the data and show to the client
});

server.listen(3000,()=>{
    console.log("Server Listening on port 3000");
})