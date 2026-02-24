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
                console.log('清空定时1')
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

    return {
        debounceFn
    }
}

export default useHandEdit