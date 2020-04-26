//get the process id
console.log(process.pid);
//get the version of node running the process
console.log(process.versions.node);

//use process.argv - array - the command tells you where node is installed on your system and the current module
console.log(process.argv);

//Note that whatever is added to the command, gets added to the argv array.

//use the process.argv array
const [, , firstName, lastName] = process.argv;

console.log(`Hi. This is ${firstName} ${lastName}`);

