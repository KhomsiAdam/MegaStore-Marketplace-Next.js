/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import { Categories } from '@/interfaces/index';
import { CategoriesItem } from '@/components/CategoriesItem';
import { CategoriesLinks } from '@/components/CategoriesLinks';
import { CategoriesQueryVariables } from '@/graphql/generated/graphql';

export const CategoriesList = ({
  mainCategories,
}: CategoriesQueryVariables) => {
  const [categories, setCategories] = useState<Array<Categories>>();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCategories(mainCategories);
    console.log(mainCategories);      
  }, [setCategories, mainCategories]);

  const handleMouseOver = (e: any) => {
    console.log(e.target.id);
    setSelectedCategory(e.target.id);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setSelectedCategory('');
    setIsOpen(false);
  };

  return (
    <>
      <div className='w-[25%] z-10 hidden xl:block' onMouseLeave={handleMouseLeave}>
        <div className='flex flex-col h-full bg-white rounded-lg'>
          <div className='flex items-center p-3 rounded-t-md bg-primary-500'>
            <ListIcon className='!fill-white' />
            <h2 className='pl-3 text-xl font-bold text-white'>Catégories</h2>
          </div>
          <ul className='flex flex-col justify-between h-full px-3 py-2 overflow-auto custom-scrollbar rtl'>
            {categories
              ? categories.map((category: Categories) => (
                  <li
                    className='flex py-3 cursor-pointer group ltr'
                    key={category.id}
                    id={category.name}
                    onMouseEnter={handleMouseOver}
                  >
                    <CategoriesItem
                      iconName={category?.icon}
                      categoryName={category?.name}
                    />
                  </li>
                ))
              : null}
          </ul>
        </div>
        {/* {isOpen ? (
          <div
            className='absolute top-0 w-[75%] h-full shadow-bm bg-white rounded-lg right-0 overflow-auto custom-scrollbar'
            onMouseLeave={handleMouseLeave}
          >
            <div className='relative flex flex-wrap px-6 py-3 overflow-hidden whitespace-nowrap'>
              <CategoriesLinks category={selectedCategory} />
            </div>
          </div>
        ) : (
          ''
        )} */}
      </div>
    </>
  );
};

export default CategoriesList;
