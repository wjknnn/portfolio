import { Icon } from '@/assets/Icon';
import Link from 'next/link';

export const Navigator = () => {
  return (
    <div className="fixed bottom-6 flex justify-center w-full z-50">
      <nav className="flex bg-black border border-zinc-800 text-zinc-400 p-2 rounded-full gap-[8px] items-end h-[58px]">
        <Link
          href="/"
          className="h-[40px] w-[40px] bg-zinc-900 border border-zinc-700 rounded-full flex justify-center items-center hover:size-[80px] [&>svg]:hover:size-[40px]"
        >
          <Icon name="House_01" />
        </Link>
        <Link
          href="/"
          className="h-[40px] w-[40px] bg-zinc-900 border border-zinc-700 rounded-full flex justify-center items-center hover:size-[80px] [&>svg]:hover:size-[40px]"
        >
          <Icon name="Archive" />
        </Link>
        <Link
          href="/"
          className="h-[40px] w-[40px] bg-zinc-900 border border-zinc-700 rounded-full flex justify-center items-center hover:size-[80px] [&>svg]:hover:size-[40px]"
        >
          <Icon name="Bulb" />
        </Link>
      </nav>
    </div>
  );
};
