import express from 'express';
const router = express.Router();

// ROTA PRODUTOS
router.get("/produtos", function(req, res) {
    const produtos = [
        {imagem: "../imgs/shorts.avif", nome: "Shorts Nike Treino 2024", preco: 1200, categoria: "Eletroportáteis"},
        {imagem: "../imgs/celtics.avif", nome: "Camiseta Nike Boston Celtics", preco: 900, categoria: "Eletrônicos"},
        {imagem: "../imgs/corta_vento.avif", nome: "Capa de Chuva Nike Corinthians 2024", preco: 3200, categoria: "Computadores"},
        {imagem: "../imgs/regata_nike.avif", nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos"}
    ];
    res.render("produtos", {
        produtos: produtos
    });
});

export default router;
