const myObject = {
    a: 1,
    b: {
      c: null,
      d: {
        e: 3,
        f: {
          g: "bingo",
        }
      }
    }
  };
  
  const deepGet =(myObject, ...keys) => {
  
      if(keys && keys.length > 0){
         const value = keys.reduce( (acc, key) => {
              //console.log('acc:', acc);
              // console.log('key:', key);
              if (typeof acc == "undefined") {
                 return acc
              }else{
                  //console.log('acc[key]:', acc[key]);
                  return  acc[key];
              }
          }, myObject);
         
      return value;
       
         
      }else{
          return myObject;
      }
     
  }
  console.log('------Deep Access-------------');
  console.log(deepGet(myObject, "x")); // undefined
  console.log(deepGet(myObject, "a")); // 1
  console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
  console.log(deepGet(myObject, "b", "c")); // null
  console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
  console.log(deepGet(myObject));  // {a: 1, b: {...}}