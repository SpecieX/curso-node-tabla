const fs = require('fs');
const colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

const crearArchivo = async (base, opcion, hasta) => {

    try {
        let salida = '';
        let consola = '';
        
        salida = '===================================\n';
        salida += `   TABLA DE MULTIPLICACION DEL ${base}\n`;
        salida += '===================================\n';
        
        consola = colors.blue('===================================\n');
        consola += colors.red(`   TABLA DE MULTIPLICACION DEL ${base}\n`);
        consola += colors.blue('===================================\n');
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} x ${i} = ${base * i}\n`;
        }
    
        if (opcion){
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`;
    
    } catch (error) {
        console.err(error);
        throw error
    }

}

module.exports = {
    crearArchivo
}