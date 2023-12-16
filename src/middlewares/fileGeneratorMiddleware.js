const validateFieldNome = (req, res, next) => {
    const {body} = req;
    if(body.nome === undefined) {
        return res.status(400).json({message: "The field 'nome' is required"});
    }
    if(body.nome === "") {
        return res.status(400).json({message: "The field 'nome' can't be empty"});
    }

    next();
}

const validateFieldFabricante = (req, res, next) => {
    const {body} = req;
    if(body.fabricante === undefined) {
        return res.status(400).json({message: "The field 'fabricante' is required"});
    }
    if(body.fabricante === "") {
        return res.status(400).json({message: "The field 'fabricante' can't be empty"});
    }

    next();
}

const validateFieldModelo = (req, res, next) => {
    const {body} = req;
    if(body.modelo === undefined) {
        return res.status(400).json({message: "The field 'modelo' is required"});
    }
    if(body.modelo === "") {
        return res.status(400).json({message: "The field 'modelo' can't be empty"});
    }

    next();
}

const validateFieldAno = (req, res, next) => {
    const {body} = req;
    if(body.ano === undefined) {
        return res.status(400).json({message: "The field 'ano' is required"});
    }
    if(body.ano === "") {
        return res.status(400).json({message: "The field 'ano' can't be empty"});
    }

    next();
}

const validateFieldTitulo = (req, res, next) => {
    const {body} = req;
    if(body.titulo === undefined) {
        return res.status(400).json({message: "The field 'titulo' is required"});
    }
    if(body.titulo === "") {
        return res.status(400).json({message: "The field 'titulo' can't be empty"});
    }

    next();
}

const validateFieldValor = (req, res, next) => {
    const {body} = req;
    if(body.valor === undefined) {
        return res.status(400).json({message: "The field 'valor' is required"});
    }
    if(body.valor === "") {
        return res.status(400).json({message: "The field 'valor' can't be empty"});
    }

    next();
}

module.exports = {
    validateFieldNome,
    validateFieldFabricante,
    validateFieldModelo,
    validateFieldAno,
    validateFieldTitulo,
    validateFieldValor
}