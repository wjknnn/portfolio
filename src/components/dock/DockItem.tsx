import Link from 'next/link';
import { appType } from './Dock';
import { useState, useEffect, useRef } from 'react';
import { interpolate } from 'popmotion';
import { Icon } from '@/assets/Icon';
import styles from '@/styles/dock.module.css';
import { throttle } from 'lodash';

const DockItem = ({
  appInfo,
  mouseX,
}: {
  appInfo: appType;
  mouseX: number | null;
}) => {
  const elRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number>(Infinity);
  const baseWidth = 36;
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

  const throttledAnimate = useRef(
    throttle((mouseX: number | null) => {
      if (elRef.current && mouseX !== null) {
        const rect = elRef.current.getBoundingClientRect();
        const imgCenterX = rect.left + rect.width / 2;
        const distanceDelta = mouseX - imgCenterX;
        setDistance(distanceDelta);
      } else {
        setDistance(beyondTheDistanceLimit);
      }
    }, 100)
  ); // 100ms 간격으로 호출하는 throttle 설정

  useEffect(() => {
    throttledAnimate.current(mouseX);
  }, [mouseX]); // 컴포넌트가 마운트될 때만 이벤트 리스너 등록

  useEffect(() => {
    const interpolatedWidth = interpolate(distanceInput, widthOutput)(distance);
    setWidthPX(interpolatedWidth);
  }, [distance]);

  const width = widthPX / 16;

  return (
    <section>
      <Link
        href={appInfo.url}
        className={styles.dockButton}
        style={{
          borderRadius: `${width * 4}px`,
          padding: `${width * 3 - 2}px`,
        }}
      >
        <div ref={elRef}>
          <Icon
            className={styles.appIcon}
            style={{ width: `${width}rem` }}
            name={appInfo.name}
          />
        </div>
      </Link>
    </section>
  );
};

export default DockItem;
