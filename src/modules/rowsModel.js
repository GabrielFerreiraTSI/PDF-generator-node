const connection = require("./connection");

const getAll = async () => {
    const rows = await connection.execute(`SELECT * FROM ((cliente 
        INNER JOIN veiculo ON veiculo.idVeiculo = cliente.idCliente)
        INNER JOIN servico ON servico.idServico = cliente.idCliente);`);
    return rows;
}

const createNewRow = async (row) => {
    const {nome, contato, fabricante, modelo, pintura, ano, placa, titulo, valor} = row;
    const dateUTC = new Date(Date.now()).toUTCString();
    
    const queryCliente = `INSERT INTO cliente VALUES('', '${nome}', '${contato}')`;
    const queryVeiculo = `INSERT INTO veiculo VALUES('', '${fabricante}', '${modelo}', '${pintura}', ${ano}, '${placa}')`;
    const queryServico = `INSERT INTO servico VALUES('', '${titulo}', '${dateUTC}', '${valor}', 'iniciado')`;
    const createdRowCliente = await connection.execute(queryCliente);
    const createdRowVeiculo = await connection.execute(queryVeiculo);
    const createdRowServico = await connection.execute(queryServico);
    return {insertId: createdRowCliente.insertId}, {insertId: createdRowVeiculo.insertId}, {insertId: createdRowServico.insertId};
}

const deleteRow = async (id) => {
    const queryCliente = `DELETE FROM cliente WHERE idCliente = ${id}`;
    const queryVeiculo = `DELETE FROM veiculo WHERE idVeiculo = ${id}`;
    const queryServico = `DELETE FROM servico WHERE idServico = ${id}`;
    const removedRowCliente = await connection.execute(queryCliente);
    const removedRowVeiculo = await connection.execute(queryVeiculo);
    const removedRowServico = await connection.execute(queryServico);
    return removedRowCliente, removedRowVeiculo, removedRowServico;
}

const updateRow = async (id, row) => {
    const {titulo, status} = row;
    const query = `UPDATE servico SET titulo = '${titulo}', status = '${status}' WHERE idServico = ${id}`;
    const updatedRow = await connection.execute(query);
    return updatedRow;
}

module.exports = {
    getAll,
    createNewRow,
    deleteRow,
    updateRow
}