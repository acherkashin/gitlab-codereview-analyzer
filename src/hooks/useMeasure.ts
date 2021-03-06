import { useRef, useState, useEffect } from 'react';

export function useMeasure() {
  const measureRef = useRef(null);

  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  const [observer] = useState(() => {
    // Check if window is defined (so if in the browser or in node.js).
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) return null;

    return new ResizeObserver(([entry]) => setBounds(entry.contentRect));
  });

  useEffect(() => {
    if (measureRef.current && observer !== null) {
      observer.observe(measureRef.current);
    }

    return () => {
      if (observer !== null) observer.disconnect();
    };
  }, [observer]);

  return [measureRef, bounds];
}
