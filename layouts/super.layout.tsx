import Head from 'next/head';
import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
};

const SidBar = () => {
  return (
    <div className='flex flex-col border-r border-gray-300'>
      <Link href='/'>
        <a className='block px-2 py-3 text-xs font-medium text-zinc-400 hover:text-zinc-200'>
          All messages
        </a>
      </Link>
      <div className='flex-1 w-48 px-2 pt-2 space-y-1'>
        <Link href='/super/admins'>
          <a className='hover:bg-gray-700/50 hover:text-white text-gray-900 0 block px-2 py-2 rounded'>
            Admin
          </a>
        </Link>
        <Link href='/super/dashboard' as='/super/sellers'>
          <a className='transition hover:bg-gray-700/50 hover:text-white  text-gray-900  block px-2 py-2 rounded'>
            Sellers
          </a>
        </Link>
      </div>
    </div>
  );
};

export const SuperLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <ChakraProvider>
        <div className='flex h-screen antialiased text-zinc-100 bg-gray-100'>
          <SidBar />
          <main className='flex w-full bg-white'>{children}</main>
        </div>
      </ChakraProvider>
    </>
  );
};
