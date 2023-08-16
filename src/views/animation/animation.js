export class FadeInAnimation {
  constructor(node) {
    this.node = node;
  }
  start(duration) {
    this.duration = duration;
    if (this.duration === 0) {
      // 动画结束
      this.onProgress(1);
    } else {
      // 动画开始
      this.onProgress(0);
      this.startTime = performance.now(); // 返回一个性能测量时刻开始经过的毫秒数
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onFrame() {
    const timepassed = performance.now() - this.startTime;
    const progress = Math.min(timepassed / this.duration, 1);
    this.onProgress(progress);
    if (progress < 1) {
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }
  onProgress(progress) {
    this.node.style.opacity = progress;
  }
  stop() {
    cancelAnimationFrame(this.frameId);
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}
