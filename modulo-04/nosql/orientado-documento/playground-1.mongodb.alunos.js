// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("escola");

// 1º - Buscar todos os alunos.
// db.getCollection("alunos").find({});

// 2º - Busca o aluno pela matrícula
// db.getCollection("alunos").findOne({
//     "matricula": "2023001"
// });


// 3º - Busca o aluno pela matrícula 
// filtrando por campo matrícula 
// (0 - Oculta / 1 - exibe o campo)
// 
// db.getCollection("alunos").findOne(
//     {"matricula": "2023001"},
//     {
//         "_id":0,
//         "matricula": 1,
//         "nome": 1,
//         "email":1,
//         "turmas.cod_turma":1, // busca na lista turmas somente o código da mesma.
//         "notas":1 // busca na lista notas todas da mesma.

//     }
// );


// 4º - Listar todos os alunos da
// {lista turmas} com algumas propriedades
// (0 - Oculta / 1 - exibe o campo)

// db.getCollection("alunos").find(
//     {"turmas.cod_turma": "TADS2023A"},
//     {
//         "_id":0,
//         "nome":1,
//         "email":1,
//         "turmas.cod_turma":1
//     }
// );

// 5º - Listar todos os alunos com nota
// maior ou igual a 8 da {lista notas}
// (0 - Oculta / 1 - exibe o campo)

db.getCollection("alunos").find(
    {"notas.nota": {$gte:8}}, //$gte --> maior ou igual
    {
        "_id":0,
        "nome":1,
        "matricula":1,
        "notas":1 // lista contendo as notas
    }
);