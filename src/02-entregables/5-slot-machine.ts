class SlotMachine {
  coin = 0;
  constructor(){ }
  play() {
      this.coin++;
      let roulette1 = this._ramdomBoolean();
      let roulette2 = this._ramdomBoolean();
      let roulette3 = this._ramdomBoolean();
    // console.log(this.coin);
    // console.log(roulette1, roulette2, roulette3);
    if(roulette1 && roulette2 && roulette3){
      const message = `Congratulations!!!. You won ${this.coin} coins!!`;
      this.coin = 0;
      console.log(message);
    }else{
      console.log( "Good luck next time!!");
    }
  }
  private _ramdomBoolean(){
    return Math.random() >= 0.5;
  }
}
console.log('--------------INICIO EJERCICIO 5------------------------');
const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
console.log('--------------FIN EJERCICIO 5------------------------');