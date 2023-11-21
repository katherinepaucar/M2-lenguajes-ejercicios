console.log('------------------------INICIO EJERCICIO 2-----------------------');
const fruits = ['apple','orange','banana', 'melon'];
const animals = ['dog','cat', 'bird','horse'];
const numbers = [2,3,4,8,6];
const concat = <T>(a: Array<T>, b: Array<T>) :  Array<T> => {
    const result = [...a,...b]
    return result;
}; 

console.log('Concat: ', concat(fruits, animals));
console.log('----------------------------------------');
/// Opcional
const concatV2 = (...array) => {
    const concatArray= [];
    array.map((item) => {
        // console.log(item);
        concatArray.push(...item)
    });
    return concatArray;

}; 

console.log('Opcional - concat: ', concatV2(fruits, animals, numbers));
console.log('------------------------INICIO EJERCICIO 2-----------------------');