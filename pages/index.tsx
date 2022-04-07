<<<<<<< HEAD
import type { NextPage } from "next";
import CategoriesList from "@/components/CategoriesList";
import NewsSlider from "@/components/NewsSlider";
import ProductsThumbnails from "@/components/ProductsThumbnails";
import VerifiedUserSharpIcon from "@mui/icons-material/VerifiedUserSharp";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import SupportAgentSharpIcon from "@mui/icons-material/SupportAgentSharp";
import { MouseEvent, useContext } from "react";
import ModalContext from "@/context/ModalContext";
import FeatherIcon from "feather-icons-react";

=======
import type { NextPage } from 'next';
import CategoriesList from '@/components/CategoriesList';
import NewsSlider from '@/components/NewsSlider';
import AuthComponent from '@/components/AuthComponent';
import ProductsRow from '@/components/ProductsRow';
import VerifiedUserSharpIcon from '@mui/icons-material/VerifiedUserSharp';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import SupportAgentSharpIcon from '@mui/icons-material/SupportAgentSharp';
import { MouseEvent, useContext } from 'react';
import ModalContext from '@/context/ModalContext';
>>>>>>> a33f3f9f37c1e034982b5e16577a19a836332e2e
import {
  CategoriesDocument,
  CategoriesQueryVariables,
  ProductsDocument,
  ProductsQueryVariables,
  ProductsQuery,
<<<<<<< HEAD
} from "@/graphql/generated/graphql";
import apolloClient from "@/graphql/apollo";
import { GetServerSideProps } from "next";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import { Fab } from "@mui/material";

const Home: NextPage<CategoriesQueryVariables, ProductsQuery> = ({
  categories,
  products,
}) => {
  const { toggleModal, setForm } = useContext(ModalContext);
  const { isLogged, User } = useAppSelector((state) => state.user);
  const router = useRouter();
  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (toggleModal) toggleModal();
    setForm((e.target as HTMLButtonElement).value);
  };
=======
} from '@/graphql/generated/graphql';
import apolloClient from '@/graphql/apollo';
import { GetServerSideProps } from 'next';
import categoriesData from '@/data/categoriesData.json';
import products from '@/data/products.json';
import Link from 'next/link';

const Home: NextPage<CategoriesQueryVariables, ProductsQuery> = ({
  categories,
  products,
}) => {

>>>>>>> a33f3f9f37c1e034982b5e16577a19a836332e2e
  return (
    <>
      <div className="h-full xl:h-[520px] overflow-hidden rounded-lg shadow-bm relative flex justify-between flex-col xl:flex-row">
        <CategoriesList mainCategories={categories} />
<<<<<<< HEAD
        <div className="w-full xl:w-[75%] flex flex-col justify-between lg:ml-3">
          <div className="w-full h-[calc(90%-0.75rem)] rounded-lg hidden xl:block">
            <div className="grid gap-3 grid-rows-[3fr_7fr] w-full h-full rounded-lg">
              <div className="grid gap-3 grid-cols-[7fr_3fr] h-full rounded-lg">
                <div className="w-full bg-white rounded-lg"></div>
                <div className="flex flex-col items-center w-full p-3 bg-white rounded-lg justify-evenly">
                  {!isLogged ? (
                    <>
                      <p className="pb-3 font-bold">Welcome to MegaStore</p>
                      <div className="flex items-center w-full justify-evenly">
                        <button
                          className="btn-primary"
                          value="register"
                          onClick={handleToggle}
                        >
                          Join
                        </button>
                        <button
                          className="btn-secondary"
                          value="login"
                          onClick={handleToggle}
                        >
                          Connect
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      GO TO MY STORE
                      <Fab
                        onClick={() => router.push("/vendor")}
                        color="primary"
                        aria-label="add"
                      >
                        <FeatherIcon icon="home" width="20" height="20" />
                      </Fab>
                    </>
                  )}
=======
        <div className='w-full xl:w-[75%] flex flex-col justify-between lg:ml-3'>
          <div className='w-full h-[calc(90%-0.75rem)] rounded-lg hidden xl:block'>
            <div className='grid gap-3 grid-rows-[3fr_7fr] w-full h-full rounded-lg'>
              <div className='grid gap-3 grid-cols-[7fr_3fr] h-full rounded-lg'>
                <div className='w-full bg-white rounded-lg'></div>
                <div className='flex flex-col items-center w-full p-3 bg-white rounded-lg justify-evenly'>
                  <p className='font-bold'>Welcome to MegaStore</p>
                  <div className='flex items-center justify-between w-full'>
                    <AuthComponent />
                  </div>
>>>>>>> a33f3f9f37c1e034982b5e16577a19a836332e2e
                </div>
              </div>
              <div className="w-full h-full overflow-hidden bg-white rounded-lg">
                <NewsSlider />
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex flex-col items-center w-full p-3 bg-white rounded-lg justify-evenly xl:hidden">
            <p className="pb-3 font-bold">Welcome to MegaStore</p>
            <div className="flex items-center w-full justify-evenly">
              <button
                className="btn-primary"
                value="register"
                onClick={handleToggle}
              >
                Join
              </button>
              <button
                className="btn-secondary"
                value="login"
                onClick={handleToggle}
              >
                Connect
              </button>
=======
          <div className='flex flex-col items-center w-full p-3 bg-white rounded-lg justify-evenly xl:hidden'>
            <p className='pb-3 font-bold'>Welcome to MegaStore</p>
            <div className='flex items-center w-full justify-evenly'>
              <AuthComponent />
>>>>>>> a33f3f9f37c1e034982b5e16577a19a836332e2e
            </div>
          </div>
          <div className="bg-white w-full my-3 xl:my-0 py-3 xl:h-[10%] rounded-lg flex justify-between items-center px-1 lg:px-3">
            <div className="flex items-center justify-between text-lg lg:text-2xl">
              <VerifiedUserSharpIcon
                className="!fill-primary-500"
                fontSize="inherit"
              />
              <p className="ml-1 text-xs lg:ml-3 lg:font-bold">
                Safe and reliable payments
              </p>
            </div>
            <div className="flex items-center justify-between text-lg lg:text-2xl">
              <MonetizationOnSharpIcon
                className="!fill-primary-500"
                fontSize="inherit"
              />
              <p className="ml-1 text-xs lg:ml-3 lg:font-bold">
                Money back guarantee
              </p>
            </div>
            <div className="flex items-center justify-between text-lg lg:text-2xl">
              <SupportAgentSharpIcon
                className="!fill-primary-500"
                fontSize="inherit"
              />
              <p className="ml-1 text-xs lg:ml-3 lg:font-bold">
                24/7 customer service
              </p>
            </div>
          </div>
        </div>
      </div>
      <ProductsRow products={products} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  // const { data: categoriesData } = await apolloClient.query({
  //   query: CategoriesDocument,
  // });
  // const { data: productData } = await apolloClient.query({
  //   query: ProductsDocument,
  // });

  return {
    props: {
      categories: categoriesData,
      products: products,
    },
  };
};
