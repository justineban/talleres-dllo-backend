//PUNTO 1

function desglosarString(cadena, tipo) {
    const vocales = 'aeiou';
    let cantidad = 0;

    cadena = cadena.toLowerCase();

    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena[i];

        if (tipo === "vocales" && vocales.includes(letra)) {
            cantidad++;
        } else if (tipo === "consonantes" && letra >= 'a' && letra <= 'z' && !vocales.includes(letra)) {
            cantidad++;
        }
    }
    return cantidad;
}

//PUNTO 2
function twoSum(numeros, objetivo) {
    for (let i = 0; i < numeros.length; i++) {
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[i] + numeros[j] === objetivo) {
                return [i, j];
            }
        }
    }
    return [];
} 

//PUNTO 3
function conversionRomana(romano) {
    const valoresRomanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;
    let prevValor = 0;
    for (let i = romano.length - 1; i >= 0; i--) {
        let valorActual = valoresRomanos[romano[i]];
        
        if (valorActual >= prevValor) {
            total += valorActual;
        } else {
            total -= valorActual;
        }
        prevValor = valorActual;
    }
    return total;
}
