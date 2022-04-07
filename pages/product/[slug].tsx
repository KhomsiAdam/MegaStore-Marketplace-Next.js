import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { Rating } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';
import {
  GetProductByIdDocument,
  GetProductByIdQuery,
} from '@/graphql/generated/graphql';
import apolloClient from '@/graphql/apollo';

const ProductDetails: NextPage<GetProductByIdQuery> = ({ product }) => {

  useEffect(() => {
    console.log(product);
  }, [product]);

  // const { addToCart } = useContext(CartContext);

  return (
    <>
      <Head>
        <title>Product Details</title>
      </Head>
      <section className='overflow-hidden text-gray-700 bg-white body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='relative flex flex-col mx-auto md:flex-row lg:w-4/5'>
            <Image
              alt='ecommerce'
              height='500px'
              width='500px'
              className='object-cover object-center w-[500px] h-[500px] border border-gray-200 rounded lg:w-1/2'
              src={product?.thumbnails[0]?.src || '/images/products/default.png'}
            />
            <div className='w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0'>
              <h2 className='text-sm tracking-widest text-gray-500 title-font'>
                {product?.brand}
              </h2>
              <h1 className='mb-1 text-3xl font-medium text-gray-900 title-font'>
                {product?.name}
              </h1>
              <div className='flex mb-4'>
                <span className='flex items-center'>
                  <Rating
                    color='blue'
                    name='rating'
                    defaultValue={2}
                    precision={1}
                  />
                  <span className='ml-3 text-gray-600'>4 Reviews</span>
                </span>
                <span className='flex py-2 pl-3 ml-3 border-l-2 border-gray-200'>
                  <a className='font-bold text-primary-500'>{product?.store?.name}</a>
                </span>
              </div>
              <div className='mx-6 leading-relaxed'>{product?.description}</div>
              <div className='flex flex-col pb-5 mt-6 mb-5 border-b-2 border-gray-200 md:items-center md:flex-row'>
              </div>
              <div className='flex items-center justify-between w-full'>
                <span className='text-2xl font-medium text-gray-900 title-font'>
                  {product?.price} MAD
                </span>
                <button
                  className='flex px-6 py-2 text-white border-0 rounded bg-primary-500 focus:outline-none hover:bg-primary-600'
                  // onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
                <button className='inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-white bg-gray-400 border-0 rounded-full hover:bg-primary-500'>
                  <svg
                    fill='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { slug } = context.params;

  const { data: productData } = await apolloClient.query({
    query: GetProductByIdDocument,
    variables: {
      getProductByIdId: slug,
    },
  });

  return {
    props: {
      product: productData.product,
    },
  };
};
