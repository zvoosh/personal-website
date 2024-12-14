type ObserverCallback = (target: Element) => void;

const createIntersectionObserver = (
  callback: ObserverCallback,
  options: IntersectionObserverInit = { threshold: 0.1 }
): IntersectionObserver => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target); // Optionally unobserve the target after it intersects
      }
    });
  }, options);

  return observer;
};

export default createIntersectionObserver;
