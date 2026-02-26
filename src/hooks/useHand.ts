const useHandEdit = () => {
    /** 
     * @description 防抖函数
     * @param fn: 函数
     * @param delay: 延时
     * @param immediately: 是否立即执行
     * 
    */
    const debounceFn = (fn: Function, delay: number = 1000, immediately: boolean = false) => {
        let timer: ReturnType<typeof setTimeout> | null = null; // 定时器
        return function (...args: any[]) {
            if (timer) {
                clearTimeout(timer)
            }
            // 立即执行
            if (immediately) {
                const callNow = !timer;
                timer = setTimeout(() => {
                    timer = null // 延迟后清空 timer
                }, delay)
                if (callNow) fn(...args)
            } else {
                // 延时执行
                timer = setTimeout(() => {
                    fn(...args)
                }, delay)
            }
        }
    }

    /**
     * @description 节流函数-定时器版本 在多次操作中按照固有间隔执行
     * @params fn 函数
     * @params delay 函数执行间隔
     */

    const throttleFn = (fn: Function, delay: number = 1000) => {
        let timer: ReturnType<typeof setTimeout> | null = null; // 定时器
        return function (...args: any[]) {
            if (!timer) {
                timer = setTimeout(() => {
                    fn(...args)
                    timer = null
                }, delay);
            }
        }
    }


    /**
     * @description 节流函数 时间戳版本
     * @params fn 函数
     * @params delay 函数执行间隔
     */
    const throttleTimeFn = (fn: Function, delay: number = 1000) => {
        let lasTime = 0;
        return function(...args: any[]){
            const now = new Date().getTime(); // 获取时间戳
            if(now - lasTime > delay){
                fn(...args)
                lasTime = now
            }
        }
    }

    return {
        debounceFn,
        throttleFn,
        throttleTimeFn
    }
}

export default useHandEdit