import { resolve } from "config/webpack.common";

const usePromise = () => {
    /* promise的用法 */


    type State = 'pending' | 'fulfilled' | 'rejected';

    class MyPromise {
        private status: State = 'pending';
        private value: any;
        private reason: any;
        // 关键：增加两个数组，用来存放 pending 状态下注册的 then 回调
        private onResolvedCallbacks: Function[] = [];
        private onRejectedCallbacks: Function[] = [];

        constructor(executor: Function) {
            const resolve = (value: any) => {
                if (this.status === 'pending') {
                    this.status = 'fulfilled'
                    this.value = value;
                    // 状态改变后，依次执行之前存起来的回调
                    this.onResolvedCallbacks.forEach(fn => fn())
                }
            }

            const reject = (reason: any) => {
                if (this.status === 'pending') {
                    this.status = 'rejected'
                    this.reason = reason;
                    // 状态改变后，依次执行之前存起来的回调
                    this.onRejectedCallbacks.forEach(fn => fn())
                }
            }
            executor(resolve, reject)
        }

        // 核心解耦函数：解析返回值 x 与 promise2 的关系
        private resolvePromise(promise2: MyPromise, x: any, resolve: Function, reject: Function) {
            // 防止循环引用
            if (promise2 === x) {
                return reject(new TypeError('链式循环'))
            }
            // 如果 x 是一个promise
            if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
                let called = false; // 确保只执行一次
                try {
                    let then = x.then;
                    if (typeof then === 'function') {
                        // 如果 x 有then,那就是promise
                        then.call(x, (y: any) => {
                            if (called) return;
                            called = true;
                            // 递归解析（有可能promise resolve的 还是个promise）
                            this.resolvePromise(promise2, y, resolve, reject)
                        }, (r: any) => {
                            if (called) return;
                            called = true;
                            reject(r)
                        })
                    } else {
                        resolve(x)
                    }
                } catch (e) {
                    if (called) return;
                    reject(e)
                }
            } else {
                // 如果是普通值 直接resolve
                resolve(x)
            }
        }

        then(onFulfilled?: Function, onRejected?: Function) {
            console.log('then', this.status)

            // 1. 处理值穿透：如果 then 没传回调，要把值继续往后传
            onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v: any) => v;
            onRejected = typeof onRejected === 'function' ? onRejected : (e: any) => { throw e };


            //2. 返回新的promise
            const promise2 = new MyPromise((resolve: any, reject: any) => {
                // 封装一个执行器，用来处理异步逻辑和错误捕捉
                const fulfilledMicrotask = () => {
                    queueMicrotask(() => {
                        try {
                            const x = onFulfilled(this.value);
                            // 核心：处理返回值 x
                            this.resolvePromise(promise2, x, resolve, reject);
                        } catch(e){
                            reject(e)
                        }
                    })
                }

                const rejectedMicrotask = () => {
                    queueMicrotask(() => {
                        try {
                            const x = onRejected(this.reason);
                            this.resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    });
                };

                if (this.status === 'fulfilled') {
                    //成功
                    fulfilledMicrotask();
                } else if (this.status === 'rejected') {
                    // 失败
                    rejectedMicrotask();
                } else if (this.status === 'pending') {
                    // 存储回调
                    if (onFulfilled) {
                        this.onResolvedCallbacks.push(fulfilledMicrotask)
                    }
                    if (onRejected) {
                        this.onRejectedCallbacks.push(rejectedMicrotask)
                    }
                }
            })

            return promise2



        }

    }

    interface IParams {
        id: number;
        name?: string
    }

    const handleEdit = (params: IParams) => {
        const p1 = new MyPromise((resolve: any) => {
            setTimeout(() => resolve('第一阶段'), 1000)
        })
        p1.then((res: any) => {
            console.log(res)
            return '第二阶段开始'
        }).then((res: any) => {
            console.log(res)
            return new MyPromise((resolve: any) => resolve('嵌套promise'))
        }).then((res: any) => {
            console.log(res)
        })
        // return new MyPromise((resolve: any, reject: any) => {
        //     if (params.id > 5) {
        //         resolve('超出预期')
        //     }
        //     if (params.id < 5) {
        //         resolve('正常操作')
        //     }
        //     if (params.id === 5) {
        //         reject('刚好等于5')
        //     }
        // })
    }






    return {
        handleEdit
    }

}

export default usePromise