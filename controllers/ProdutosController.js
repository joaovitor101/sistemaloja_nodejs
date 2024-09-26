import express from 'express';
const router = express.Router();

// ROTA PRODUTOS
router.get("/produtos", function(req, res) {
    const produtos = [
        {imagem: "../imgs/shorts.avif", nome: "Shorts Nike Treino 2024", preco: 1200, categoria: "Roupa"},
        {imagem: "../imgs/celtics.avif", nome: "Camiseta Nike Boston Celtics", preco: 900, categoria: "Roupa"},
        {imagem: "../imgs/corta_vento.avif", nome: "Capa de Chuva Nike Corinthians 2024", preco: 3200, categoria: "Roupa"},
        {imagem: "../imgs/regata_nike.avif", nome: "Regata Brooklyn 2024", preco: 150, categoria: "Roupa"},
        {imagem: "../imgs/corintia.avif", nome: "Camisa Corinthians 2024", preco: 350, categoria: "Roupa"},
        {imagem: "../imgs/camisa01.avif", nome: "Camisa Nike NBA 2024", preco: 150, categoria: "Roupa"},
        {imagem: "../imgs/barsa.avif", nome: "Camisa Nike Barcelone", preco: 150, categoria: "Roupa"},
        {imagem: "../imgs/camisa02.avif", nome: "Camisa Brooklyn Net Masc.", preco: 150, categoria: "Roupa"},
    ];
    res.render("produtos", {
        produtos: produtos
    });
});

export default router;
