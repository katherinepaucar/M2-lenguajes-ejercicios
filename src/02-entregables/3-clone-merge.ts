//CLONE
const dataPerson = {"name": "Daniela", "lastName": "Andrade", "age":25}
function clone(source) {
   const copy = {...source}
   return copy;
}
console.log('CLONE:', clone(dataPerson));
console.log('---------------------------');

// MERGE
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
/**Resultado
 * merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
 */
function merge(source, target) {
    const mergeData = {...target, ...source};
    return mergeData;
}
console.log('MERGE:', merge(a,b));
console.log('---------------------------');