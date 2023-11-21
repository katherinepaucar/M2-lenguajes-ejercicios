console.log('------------------------INICIO EJERCICIO 1-----------------------');
// --------HEAD---------
const head = <T>(array: Array<T>):T => {
    const [first] = array;
    return first
};

const names: string[] = ["Maria","Katherine", "Lola"];
const ages: number[]= [61,32, 18];
console.log('HEAD names:',head(names));
console.log('HEAD ages:',head(ages));
console.log('---------------------------------');

//---------Tail-------------
const tail = <T>(array: Array<T>): Array<T>=>  {
    const [,...data] = array;
    return data;

}; 
console.log('TAIL names:',tail(names));
console.log('TAIL ages:',tail(ages));
console.log('---------------------------------');
//------ INIT --------------
const init = <T>(data: Array<T>): Array<T>  => {
    const  result = data.slice(0, data.length - 1);
    return result;
};
console.log('INIT names:',init(names));
console.log('INIT ages:', init(ages));
console.log('---------------------------------');
//------ LAST --------------
const last = <T>(data: Array<T>): Array<T>=> {
    const  last =  data.slice(data.length - 1);
    return last;
};
console.log('LAST names:',last(names));
console.log('LAST ages:', last(ages));

console.log('------------------------FIN EJERCICIO 1-----------------------');