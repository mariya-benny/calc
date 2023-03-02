const yargs = require('yargs');

const argv = yargs
    .command('add', 'Add two numbers', {
        num1: {
            description: 'First number',
            demandOption: true,
            type: 'number'
        },
        num2: {
            description: 'Second number',
            demandOption: true,
            type: 'number'
        }
    })
    .command('subtract', 'Subtract two numbers', {
        num1: {
            description: 'First number',
            demandOption: true,
            type: 'number'
        },
        num2: {
            description: 'Second number',
            demandOption: true,
            type: 'number'
        }
    })
    .command('multiply', 'Multiply two numbers', {
        num1: {
            description: 'First number',
            demandOption: true,
            type: 'number'
        },
        num2: {
            description: 'Second number',
            demandOption: true,
            type: 'number'
        }
    })
    .command('divide', 'Divide two numbers', {
        num1: {
            description: 'First number',
            demandOption: true,
            type: 'number'
        },
        num2: {
            description: 'Second number',
            demandOption: true,
            type: 'number'
        }
    })
    .help()
    .argv;

const command = argv._[0];

if (command === 'add') {
    const result = argv.num1 + argv.num2;
    console.log(`${argv.num1} plus ${argv.num2} is ${result}`);
} else if (command === 'subtract') {
    const result = argv.num1 - argv.num2;
    console.log(`${argv.num1} minus ${argv.num2} is ${result}`);
} else if (command === 'multiply') {
    const result = argv.num1 * argv.num2;
    console.log(`${argv.num1} multiplied by ${argv.num2} is ${result}`);
} else if (command === 'divide') {
    const result = argv.num1 / argv.num2;
    console.log(`${argv.num1} divided by ${argv.num2} is ${result}`);
} else {
    console.log('Invalid command');
}
