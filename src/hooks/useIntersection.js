import { useEffect, useState } from "react";

export const useIntersection = parent => {
  const [currentVisibleId, setCurrentVisibleId] = useState('');

  useEffect(() => {
    const observableCollection = parent.current?.children;

    const options = {
      threshold: [1, .7, .46],
      rootMargin: '-300px 0px 0px 200px'
    }

    const callback = entries => {
      entries.forEach(entry => {
        const nextTab = +entry.target.dataset.id === 0
                          ? 'one'
                          : +entry.target.dataset.id === 1
                                    ? parent.current?.scrollTop > 40 ? 'two' : 'one'
                                    : 'three';
        entry.isIntersecting && setCurrentVisibleId(nextTab);
      })
    };

    const observer = new IntersectionObserver(callback, options);
    [...observableCollection].reverse().forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [parent]);

  return currentVisibleId;
}