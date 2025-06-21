// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("escola");

// 1º - Buscar todos os professores
// db.getCollection("professores").find({});


// 2º - Buscar um professor pelo ni_professor
// de semestre igual a 4 
// db.getCollection("professores").findOne({
//     "ni_professor": "P002"
// });


// 3º - Buscar todos os professores filtrando 
// os campos a serem exibidos
// (0 - Oculta / 1 - exibe o campo)
db.getCollection("professores").find(
    {},
    {
        "_id": 0,
        "ni_professor": 1,
        "nome": 1,
        "email": 1,
        "disciplinas":1
    }
);