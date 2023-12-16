const fileGeneratorModel = require("../fileGeneratorModel");

const generateFile = (req, res) => {
    fileGeneratorModel.generateFile(req.body);
    return res.status(204).json({message: "file created"});
}

module.exports = {generateFile};