function isElementInViewport(element: any) {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resolve(true);
          observer.unobserve(element);
        }
      });
    });

    observer.observe(element);
  });
}
