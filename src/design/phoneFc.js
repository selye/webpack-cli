/* 抽象工厂 */
class MobileFactory {
  createOs() {
    /* 软件 */
    throw new Error('不允许直接调用');
  }
  createHardWare() {
    /* 硬件 */
    throw new Error('不允许直接调用');
  }
}

/* 抽象软件产品类 */
class OS {
  controlHardWare() {
    throw new Error('不允许直接调用抽象类');
  }
}

/* 具象软件产品 */
class AndroidOS extends OS {
  controlHardWare() {
    console.log('使用😈系统操作');
  }
}
class AppleOS extends OS {
  controlHardWare() {
    console.log('使用🍎系统操作');
  }
}

/* 抽象硬件产品类 */
class HardWare {
  operateByOrder() {
    throw new Error('不允许直接调用抽象类');
  }
}

/* 具象硬件产品 */
class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log('使用高通的硬件运转');
  }
}
class MiWare extends HardWare {
  operateByOrder() {
    console.log('使用小米的硬件运转');
  }
}

/* 具象工厂 */
class FakeStarFactory extends MobileFactory {
  createOs() {
    // 提供安卓系统
    return new AndroidOS();
  }
  createHardWare() {
    // 提供高通硬件
    return new QualcommHardWare();
  }
}

// // 创建具体产品
// const myPhone = new FakeStarFactory();
// // 产品的软件
// const myOs = myPhone.createOs();
// // 产品的硬件
// const myHardWare = myPhone.createHardWare();
// myOs.controlHardWare();
// myHardWare.operateByOrder();

class AppleFactory extends MobileFactory {
  createOs() {
    return new AppleOS();
  }
  createHardWare() {
    return new MiWare();
  }
}

const apple = new AppleFactory();
const os = apple.createOs();
const hardWare = apple.createHardWare();
os.controlHardWare();
hardWare.operateByOrder();
