/* - 美式咖啡态（american)：只吐黑咖啡
- 普通拿铁态(latte)：黑咖啡加点奶
- 香草拿铁态（vanillaLatte）：黑咖啡加点奶再加香草糖浆
- 摩卡咖啡态(mocha)：黑咖啡加点奶再加点巧克力
*/

const stateToProcessor = {
  american() {
    console.log('我只吐黑咖啡');
  },
  latte() {
    this.american();
    console.log('加点奶');
  },
  vanillaLatte() {
    this.latte();
    console.log('再加香草糖浆');
  },
  mocha() {
    this.latte();
    console.log('再加巧克力');
  },
};
class CoffeeMaker {
  constructor() {
    this.stata = 'init';
  }

  changeState(state) {
    this.stata = state;
    if (!stateToProcessor[state]) {
      return null;
    }
    return stateToProcessor[state]();
  }
}

const mk = new CoffeeMaker();
mk.changeState('vanillaLatte');
