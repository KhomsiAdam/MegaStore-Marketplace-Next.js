import { SuperLayout } from 'layouts/super.layout';
import { NextPage } from 'next';

export const Page: NextPage = ({}) => {
  return (
    <>
      <div className='py-6'>
        <div className='flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl'>
          <div
            style={{
              backgroundImage: 'url(https://tailwindcss.com/img/card-top.jpg)',
            }}
            className='hidden lg:block lg:w-1/2 bg-cover'></div>
          <div className='w-full p-8 lg:w-1/2'>
            <h2 className='text-2xl font-semibold text-gray-700 text-center'>
              Mega Store
            </h2>
            <p className='text-xl text-gray-600 text-center'>Welcome back!</p>

            <div className='mt-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Email Address
              </label>
              <input
                className='w-full bg-gray-100 text-gray-800  focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
                type='email'
              />
            </div>
            <div className='mt-4'>
              <div className='flex justify-between'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                  Password
                </label>
                <a href='#' className='text-xs text-gray-500'>
                  Forget Password?
                </a>
              </div>
              <input
                className='w-full bg-gray-100 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
                type='password'
              />
            </div>
            <div className='mt-8'>
              <button className='bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600'>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//@ts-ignore
Page.Layout = 'none';

export const getServerSideProps = async () => {
  return { props: {} };
};

export default Page;
