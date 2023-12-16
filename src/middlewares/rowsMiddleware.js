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

const validateFieldStatus = (req, res, next) => {
    const {body} = req;
    if(body.status === undefined) {
        return res.status(400).json({message: "The field 'status' is required"});
    }
    if(body.status === "") {
        return res.status(400).json({message: "The field 'status' can't be empty"});
    }

    next();
}

module.exports = {
    validateFieldNome,
    validateFieldStatus
}