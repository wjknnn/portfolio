import { useState, useEffect, useRef, useCallback } from 'react';
import { interpolate, spring } from 'popmotion';
import Link from 'next/link';
import { appType } from './Dock';
import { Icon } from '@/assets/Icon';
import styles from '@/styles/dock.module.css';

const DockItem = ({
  appInfo,
  mouseX,
}: {
  appInfo: appType;
  mouseX: number | null;
}) => {
  const elRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number>(Infinity);
  const baseWidth = 57.6;
  const distanceLimit = baseWidth * 6;
  const beyondTheDistanceLimit = distanceLimit + 1;
  const distanceInput = [
    -distanceLimit,
    -distanceLimit / 1.25,
    -distanceLimit / 2,
    0,
    distanceLimit / 2,
    distanceLimit / 1.25,
    distanceLimit,
  ];
  const widthOutput = [
    baseWidth,
    baseWidth * 1.1,
    baseWidth * 1.618,
    baseWidth * 2.618,
    baseWidth * 1.618,
    baseWidth * 1.1,
    baseWidth,
  ];

  const [widthPX, setWidthPX] = useState<number>(baseWidth);

  const animate = useCallback(() => {
    if (elRef.current && mouseX !== null) {
      const rect = elRef.current.getBoundingClientRect();
      const imgCenterX = rect.left + rect.width / 2;
      const distanceDelta = mouseX - imgCenterX;
      setDistance(distanceDelta);
    } else {
      setDistance(beyondTheDistanceLimit);
    }
  }, [mouseX]);

  useEffect(() => {
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  useEffect(() => {
    const interpolatedWidth = interpolate(distanceInput, widthOutput)(distance);
    setWidthPX((prevWidth) => {
      if (prevWidth !== interpolatedWidth) {
        return interpolatedWidth;
      }
      return prevWidth;
    });
  }, [distance]);

  const width = `${widthPX / 16}rem`;

  return (
    <section>
      <Link
        href={appInfo.url}
        className={styles.dockButton}
        // className="h-[40px] w-[40px] bg-zinc-900 border border-zinc-700 rounded-full flex justify-center items-center"
      >
        <div ref={elRef}>
          <Icon
            className={styles.appIcon}
            style={{ width }}
            name={appInfo.name}
          />
        </div>
      </Link>
    </section>
  );
};

export default DockItem;
