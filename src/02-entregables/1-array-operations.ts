// --------HEAD---------
const head = (array) => {
    const [first] = array;
    return first
};

const names = ["Maria","Katherine", "Lola"];
const ages = [61,32, 18];

console.log('HEAD names:',head(names));
console.log('HEAD ages:',head(ages));
console.log('---------------------------------');

//---------Tail-------------
const tail = (array) => {
    const [,...data] = array;
    return data;

}; 
console.log('TAIL names:',tail(names));
console.log('TAIL ages:',tail(ages));
console.log('---------------------------------');
//------ INIT --------------
const init = (data) => {
    const  result = data.slice(0, data.length - 1);
    return result;
};
console.log('INIT names:',init(names));
console.log('INIT ages:', init(ages));
console.log('---------------------------------');
//------ LAST --------------
const last = (data) => {
    const  last =  data.slice(data.length - 1);
    return last;
};
console.log('LAST names:',last(names));
console.log('LAST ages:', last(ages));
console.log('---------------------------------');