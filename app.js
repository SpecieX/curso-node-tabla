const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Establece el numero para crear la tabla de multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: '10',
                    describe: 'Establece el numero final para crear la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Establece si sera mostrada en pantalla la tabla creada'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw new Error('La base tiene que ser un numero')
                    }
                    return true;
                })
                .argv;

console.clear();

//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.base);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

//const base = 8;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.yellow, 'creado\n'.yellow))
    .catch(err => console.log(err));
