import Head from 'next/head';
import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
};

const SidBar = () => {
  return (
    <aside className='flex flex-col border-r border-zinc-700'>
      <a className='block px-2 py-3 text-xs font-medium text-zinc-400'>
        All messages
      </a>
      <div className='flex-1 w-48 px-2 pt-2 space-y-1 bg-slate-400'>
        <Link href='/super/admins'>
          <a className='bg-blue-600 text-green-500  block px-2 py-2 rounded'>
            Admin
          </a>
        </Link>
        <Link href='/super/dashboard' as='/super/sellers'>
          <a className='bg-blue-600 text-green-500  block px-2 py-2 rounded'>
            Sellers
          </a>
        </Link>
      </div>
    </aside>
  );
};

export const SuperLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <ChakraProvider>
        <div className='flex h-screen antialiased p-3 bg-zinc-800'>
          <SidBar />
          <main className='flex w-full bg-zinc-900'>{children}</main>
        </div>
      </ChakraProvider>
    </>
  );
};
