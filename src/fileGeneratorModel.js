const pdf = require("html-pdf");
const ejs = require("ejs");

const generateFile = (req) => {
    const {nome, fabricante, modelo, ano, titulo, valor} = req;
    const dateUTC = new Date(Date.now()).toUTCString();

    ejs.renderFile("./index.ejs", {nome: nome, fabricante: fabricante, modelo: modelo, ano: ano, 
    titulo: titulo, dateUTC: dateUTC, valor: valor}, (err, res) => {
        if(err) {
            console.log("Erro ao renderizar a página.");
        } else {
            pdf.create(res, {}).toFile(`./pdf/servico-autorizado-por-${nome}.pdf`, (err, res) => {
                if(err) { 
                    console.log("Erro ao gerar pdf.");
                } else {
                    console.log(res);
                }
            });
        }
    });
}

module.exports = {generateFile};