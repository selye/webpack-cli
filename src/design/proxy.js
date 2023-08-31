// 未知妹子
const girl = {
  // 姓名
  name: '小美',
  // 自我介绍
  aboutMe: '...',
  // 年龄
  age: 24,
  // 职业
  career: 'teacher',
  // 假头像
  fakeAvatar: 'xxxx',
  // 真实头像
  avatar: 'xxxx',
  // 手机号
  phone: 123456,
};

const baseInfo = ['name', 'career'];
const privateInfo = ['avatar', 'phone'];

const user = {
  name: 'Jack',
  isValidated: true,
  isVip: false,
};

const JuejinLovers = new Proxy(girl, {
  get: function (girl, key) {
    if (baseInfo.indexOf(key) !== -1 && !user.isValidated) {
      console.log('请先完成实名认证');
      return;
    }
    if (user.isValidated && privateInfo.indexOf(key) && !user.isVip) {
      console.log('详细信息请充值vip');
      return;
    }
  },
});
