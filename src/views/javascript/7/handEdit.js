// 手写测试
// 防抖 
// 核心：使用闭包 保留定时器，确保定时器的唯一性，确保可以清空。让timer在多次方法之间可以共享
// 定时器 延时
var debounceFn = function (fn, delay) {
    if (delay === void 0) { delay = 1000; }
    var timer = null; // 定时器
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(void 0, args);
        }, delay);
    };
};
console.log(debounceFn);
var debBtn = document.getElementById('btn');
if (debBtn) {
    debBtn.onclick = debounceFn(function () {
        console.log('click');
    });
}
