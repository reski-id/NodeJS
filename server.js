const http = require('http');

const todos=[
    { id :1,text:'todo one'},
    { id :2,text:'todo two'},
    { id :3,text:'todo three'},
];

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'X-poweredBy': 'NodeJS'
    })

    res.end(
        JSON.stringify({
        success:true,
        data:todos
    }));

});

const PORT = 5000;

server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));