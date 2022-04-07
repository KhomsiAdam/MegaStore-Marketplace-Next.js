/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import subcategoriesData from '@/data/subcategoriesData-old.json';
import { SubCategories } from '@/interfaces/index';

export const CategoriesLinks = ({ category }: any) => {
  const [subCategories, setSubCategories] = useState<Array<SubCategories>>();

  useEffect(() => {
    const selectedSubCategories: any = subcategoriesData.map((subcategory) => {
      // if (subcategory.parent === category) {
        return subcategory;
      // };
    });
    setSubCategories(selectedSubCategories);    
  }, [setSubCategories, category]);

  return (
    <>
      {subCategories &&
        subCategories.map((subCategory) => {
          return (
            <div
              key={subCategory?.id}
              className='inline-block pr-[20px] py-3 w-[33.33%] whitespace-pre-wrap align-top'
            >
              <div className='flex flex-col pb-3 text-lg font-bold hover:text-primary-500'>
                <Link href={`/${subCategory?.name}`} passHref>
                  {subCategory?.name}
                </Link>
              </div>
              <div className='flex flex-col'>
                {subCategory?.options.map((option, i) => {
                  return (
                    <Link key={i} href={`/${option}`} passHref>
                      <a className='pb-3 leading-none last:pb-0 hover:text-primary-500 hover:underline'>
                        {option}
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CategoriesLinks;
