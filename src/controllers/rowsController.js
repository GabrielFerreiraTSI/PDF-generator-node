const models = require("../modules/rowsModel");
const connection = require("../modules/connection");

const getAll = async (req, res) => {
    const [rows] = await models.getAll();
    return res.status(200).json(rows);
}

const createNewRow = async (req, res) => {
    const createdRow = await models.createNewRow(req.body);
    return res.status(201).json(createdRow);
}

const deleteRow = async (req, res) => {
    const {id} = req.params
    await models.deleteRow(id);
    return res.status(202).json({message: "row deleted"});
}

const updateRow = async (req, res) => {
    const {id} = req.params;
    await models.updateRow(id, req.body);
    return res.status(203).json({message: "row updated"});
}

module.exports = {
    getAll,
    createNewRow,
    deleteRow,
    updateRow
}