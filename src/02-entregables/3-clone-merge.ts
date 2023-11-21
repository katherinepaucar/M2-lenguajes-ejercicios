console.log('------------------------INICIO EJERCICIO 3-----------------------');
//CLONE

const dataPerson = {"name": "Daniela", "lastName": "Andrade", "age":25}
function clone (source) {
    if(typeof source === 'object'){
        const copy = {...source}
        return copy;
    }
    return 'No es un objeto';

}
console.log('CLONE:', clone(dataPerson));
console.log('CLONE:', clone(2));

console.log('---------------------------');

// MERGE
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
/**Resultado
 * merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
 */
function merge(source, target) {
    if(typeof source === 'object' && typeof target === 'object'){
        const mergeData = {...target, ...source};
        return mergeData;
    }
    return 'Alguno de los parámetros introducidos no es un objeto'
}
console.log('MERGE:', merge(a,b));
console.log('MERGE:', merge(2,b));
console.log('------------------------FIN EJERCICIO 3-----------------------');