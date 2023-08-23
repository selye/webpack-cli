/** 构造器函数
 * @name 姓名
 * @age 年龄
 * @career 职位
 * @work 工作内容
 * **/

class User {
  constructor(name, age, career, work) {
    this.name = name;
    this.age = age;
    this.career = career;
    this.work = work;
  }
}

function Factory(name, age, career) {
  let work;
  switch (career) {
    case 'geek':
      work = ['coding', 'edit'];
      break;
    case 'product':
      work = ['manage', 'printPrd'];
      break;
    default:
      break;
  }
  return new User(name, age, career, work);
}

const geeker = new Factory('coder', 20, 'geek');
// console.log(geeker);

/* 开闭 */
