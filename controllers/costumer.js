function add () {
    return "Cadastrando cliente";
}

function list() {
    return [
        {
            id: 1,
            name: 'Chiquim',
        },
        {
            id: 2,
            name: 'Maria',
        },
    ];
}

function update() {
    return "Editando cliente";
}

function remove() {
    return "Excluindo cliente";
}

module.exports = {
    add, //add: add,
    list,
    update,
    remove,
};
