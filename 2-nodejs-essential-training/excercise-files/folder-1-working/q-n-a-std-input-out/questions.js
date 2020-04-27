const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your favorite programming langauge?"
];

//i=0 here is ensuring that if no index is passed, the 0th index is called
const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);

};

//calling the ask function
ask();

const answers = [];

//wiring up listener on data event
process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

//wiring up on exit listener
process.on("exit", () => {
    const [name, activity, lang] = answers;
    console.log(`

    Thank you for your answers.

    Go ${activity} ${name} you can lear ${lang} later 

    ` )
});


