import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Navigator } from '@/components';

const Pretendard = localFont({ src: './PretendardVariable.woff2' });

export const metadata: Metadata = {
  title: 'Seungwoo Choi',
  description: 'My potfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={Pretendard.className}>
        <Navigator />
        {children}
      </body>
    </html>
  );
}
