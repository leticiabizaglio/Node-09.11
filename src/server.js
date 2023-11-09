import express  from "express"; // Serve para escutar as requisições
import { config } from "dotenv"; // Serve para ler o arquivo .env

config(); // Lê o arquivo .env

const port = process.env.PORT || 5000; // Define a porta que será usada

const app = express(); // Cria o servidor
app.use(express.json()); // Permite que o servidor interprete o formato JSON

app.get("/", (req, res) => {
    const nome = req.query.nome;
    const qualquerNome = req.query.anime;
    const page = req.query.page;
    const limit = req.query.limit;
    // Rota inicial
    res.status(200).json({ message: nome, anime: qualquerNome, pagina: page, limite: limit});
})

app.get("/:nome/:sobrenome/:idade/:nacionalidade/:time", (req, res) => {
    const nome = req.params.nome;
    const sobrenome = req.params.sobrenome;
    const idade = req.params.idade;
    const nacionalidade = req.params.nacionalidade;
    const time = req.params.time;
    // Rota com inicial
    res.status(200).json({message:`Oiie! Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos, sou ${nacionalidade} e torço para o ${time}`});    
})

app.post("/", (req, res) => {
    // Rota para POST
    res.status(200).json({ message: "Hello POST!"});
})

app.put("/admin/users", (req, res) => {
    // Rota para PUT
    res.status(200).json({ message: "Hello PUT!"});
})

app.delete("/", (req, res) => {
    // Rota para DELETE
    res.status(200).json({ message: "Hello DELETE!"});
})

app.listen(port, () => {
    // Inicia o servidor
    console.log(`⚡Server started on http://localhost:${port}`);
})






