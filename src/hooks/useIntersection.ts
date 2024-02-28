import { MutableRefObject, useEffect, useState } from "react";

export const useIntersection = (parent : MutableRefObject<HTMLDivElement | null>) => {
  const [currentVisibleId, setCurrentVisibleId] = useState<string>('');

  useEffect(() => {
    const observableCollection = parent.current?.children;   

    const options = {
      threshold: [1, .7, .46],
      rootMargin: '-300px 0px 0px 200px'
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const id = target.dataset.id;
        const nextTab = id === '0'
                          ? 'one'
                          : id === '1'
                                    ? 'two'
                                    : 'three';
        entry.isIntersecting && setCurrentVisibleId(nextTab);
      })
    };

    const observer = new IntersectionObserver(callback, options);
    observableCollection && [...observableCollection].reverse().forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [parent]);

  return currentVisibleId;
}