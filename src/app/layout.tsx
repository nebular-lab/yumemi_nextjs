import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './component/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  prefectureCheckBoxGroup,
  prefectureTypeRadioButtonGroup,
  chart,
}: Readonly<{
  children: React.ReactNode;
  prefectureCheckBoxGroup: React.ReactNode;
  prefectureTypeRadioButtonGroup: React.ReactNode;
  chart: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <div className='flex flex-col space-y-4'>
          <div className=' w-full'>{prefectureCheckBoxGroup}</div>
          <div className=' w-full'>{prefectureTypeRadioButtonGroup}</div>
          <div className=' w-full'>{chart}</div>
        </div>
      </body>
    </html>
  );
}
