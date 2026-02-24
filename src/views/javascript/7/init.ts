// 1️⃣ 给这个函数补类型
function formatPrice(price:number, currency:string) {
  return `${currency} ${price.toFixed(2)}`;
}

// 2️⃣ 定义一个 User 类型
// 包含 id, name, role（只能是 admin / user）

interface User{
  id:number,
  name:string,
  role: 'admin' | 'user',
}

// 3️⃣ 写一个函数，只允许传合法 role
const getUser = (user: User) => {
  return user;
}

// 要求：
// 1. role 不同，返回类型不同
// 2. admin 能看到所有字段
// 3. user 看不到 internalId

interface AdminUser {
  id: number;
  name: string;
  role: 'admin';
  internalId: string;
}

interface NormalUser {
  id: number;
  name: string;
  role: 'user';
}

function getUserInfo(role: 'admin'): AdminUser;
function getUserInfo(role: 'user'): NormalUser;
function getUserInfo(role: 'admin' | 'user') :AdminUser | NormalUser {
  // 实现即可，类型最重要
  if(role === 'admin'){
    return {
      id:1,
      name:'admin',
      role:'admin',
      internalId:'123456',
    }
  }else{
    return {
      id:1,
      name:'user',
      role:'user',
    }
  }
}


// 要求：
// 根据传入的 key，返回对象中对应 key 的 value
// 并且类型要精确


interface Goods{
  name:string,
  price:number,
  id:number,
}


function getGoodsValue(obj: Goods , key: keyof Goods){
  return obj[key]
}

// 枚举类型
enum Direction{
  up,
  right,
  down,
  left
}



type MetaApiAddEntityVoFieldTypeEnum =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 16
  | 18
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27;

interface Field {
  field: string;
  fieldType: MetaApiAddEntityVoFieldTypeEnum;
}

const field: Field = {
  field: 'name',
  fieldType: 8
}



/* 权限设计 */

type Role = 'admin' | 'editor' | 'visitor';

interface Pages {
  dashboard: {
    title: string;
  };
  userManage: {
    title: string;
    danger: boolean;
  };
  articleEdit: {
    title: string;
  };
}

/* 设计函数 */
const rolePages = {
  admin: {
    userManage: {
      title: 'User Manage',
      danger: true,
    },
  },
  editor: {
    articleEdit: {
      title: 'Article Edit',
    },
  },
  visitor: {
    dashboard: {
      title: 'Dashboard',
    },
  },
} as const


function getAccessiblePages<R extends Role>(role:R): typeof rolePages[R] {
  return rolePages[role]
}

const user1 = getAccessiblePages('editor');


const userInfo = {
  name:'admin',
  role:'admin',
} as const
// typeof 取变量的类型
type UserType = typeof userInfo;
// keyof 取类型的key 所有属性名的联合类型
type UserKeys = keyof UserType;

function getValue<T, K extends keyof T>(obj:T, key:K):T[K]{
  return obj[key]
}




