import http, { Server } from "http";
const PORT = 3000;
const rotas  = {
    "/":"Curso de Express API",
    "/livros":"Entrei na rota Livros",
    "/autores":"Entrei na rota Autores"
};
const server  = http.createServer((req,res)=>{
    res.writeHead(200, {"content-Type":"text/pain"})
    res.end(rotas[req.url])
});

server.listen(PORT,()=>{
    console.log("servidor escutando");
})