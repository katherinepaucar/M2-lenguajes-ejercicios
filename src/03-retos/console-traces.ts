
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
  return message;
};

const triggers = [
  async () => await showMessage([400, "third"]),
  async () => await showMessage([100, "second"]),
];

const run =  triggers => {
    asyncFunction(triggers);
}
 const asyncFunction =  async (triggers)=> {
  for (let i=0; i < triggers.length; i++) {
       //console.log(triggers[i]());
        await triggers[i]();

  }
   console.log("first");
 }
console.log('------Console traces-------------');
run(triggers);