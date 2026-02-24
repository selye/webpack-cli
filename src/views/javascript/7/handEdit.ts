// 手写测试
// 防抖 
// 核心：使用闭包 保留定时器，确保定时器的唯一性，确保可以清空。让timer在多次方法之间可以共享
// 定时器 延时

const debounceFn = (fn: Function, delay: number = 1000) => {
    let timer: ReturnType<typeof setTimeout> | null = null; // 定时器
    return function(...args: any[]){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(...args)
        },delay)
    }
}
console.log(debounceFn)

const debBtn = document.getElementById('btn');
if(debBtn){
    debBtn.onclick =debounceFn(() => {
        console.log('click')
    }) 
}



