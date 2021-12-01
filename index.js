// Array com as perguntas a serem feitas ao usuário.
const questions = [
    "Quantos litros de água você bebeu hoje?",
    "Com que frequência você vai ao médico?",
    "De 0 à 10, quanto você avalia sua saúde hoje?",
    "Você toma algum medicamento?"
];

// Array onde serão armazenadas as respostas do usuário.
const answers = [];

// Função que mostra a pergunta ao usuário.
const askMe= (index) => {
    return process.stdout.write("\n" + questions[index] + " > \n\n");
}
askMe(0);

// Função que armazena a resposta do usuário.
process.stdin.on('data', (data) => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        askMe(answers.length);
    } else {
        process.exit();
    }
});

// Função que mostra as respostas do usuário.
process.on('exit', () => {
    console.log(`
    Você respondeu as seguintes perguntas:
    > ${questions[0]}
    R: ${answers[0]}

    > ${questions[1]}
    R: ${answers[1]}

    > ${questions[2]}
    R: ${answers[2]}

    > ${questions[3]}
    R: ${answers[3]}

    Até a próxima!
    \n`);
});