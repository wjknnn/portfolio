'use client';

import { useState } from 'react';
import DockItem from './DockItem';

export interface appType {
  name: string;
  url: string;
}

const apps: appType[] = [
  { name: 'House_01', url: '/' },
  { name: 'Archive', url: '/' },
  { name: 'Bulb', url: '/' },
];

export const Dock = () => {
  const [x, setX] = useState<number | null>(null);
  return (
    <div className="fixed bottom-6 flex justify-center w-full z-50">
      <nav
        onMouseMove={(event) => setX(event.clientX)}
        onMouseLeave={() => setX(null)}
        className="flex bg-black bg-opacity-40 backdrop-blur-xl border border-white border-opacity-[0.12] text-zinc-400 p-2 rounded-[16px] gap-[8px] items-end h-[66px] hover:px-[16px]"
      >
        {apps.map((value, idx) => (
          <DockItem appInfo={value} key={idx} mouseX={x} />
        ))}
      </nav>
    </div>
  );
};
