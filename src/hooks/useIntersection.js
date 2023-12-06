import { useEffect, useState } from "react";

export const useIntersection = parent => {
  const [currentVisibleId, setCurrentVisibleId] = useState('');

  useEffect(() => {
    const observableCollection = parent.current?.children;    

    const options = {
      threshold: [1, 0.8, 0.08],
      rootMargin: '-333px'
    }

    const callback = entries => {
      entries.forEach(entry => {
        const nextTab = entry.target.dataset.id == 0
                          ? 'one'
                          : entry.target.dataset.id == 1
                                    ? 'two'
                                    : 'three';
        entry.isIntersecting && setCurrentVisibleId(nextTab);
      })
    };

    const observer = new IntersectionObserver(callback, options);
    [...observableCollection].forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [parent]);

  return currentVisibleId;
}