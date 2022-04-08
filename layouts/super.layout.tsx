import Head from 'next/head';
import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  children?: ReactNode;
};

const SidBar = () => {
  return (
    <div className='flex flex-col border-r border-zinc-700'>
      <div className='flex-1 w-48 px-2 pt-2 space-y-1 bg-slate-400'>
        <Link href='/super/admins'>
          <a className='bg-blue-600 text-green-500  block px-2 py-2 rounded'>
            Admin
          </a>
        </Link>
        <h1 className='text-red-500 text-lg bg-slate-900'>azz</h1>

        <Link href='/super/dashboard' as='/super/sellers'>
          <a className='bg-blue-600 text-green-500  block px-2 py-2 rounded'>
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
        <div className='flex h-screen'>
          <SidBar />
          <div className=' w-10 h-10 shadow-xl bg-slate-700'>azz</div>
          <main className='flex w-full'>{children}</main>
        </div>
      </ChakraProvider>
    </>
  );
};
