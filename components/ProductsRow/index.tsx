import { ProductsQuery } from '@/graphql/generated/graphql';
import { useEffect } from 'react';
import ProductThumbnail from '../ProductsThumbnail';

export const ProductsRow = ({ products }: ProductsQuery) => {
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className='grid grid-cols-5 gap-4 p-3 my-3 bg-white rounded-lg'>
      {products?.map((product: any) => (
        <ProductThumbnail key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductsRow;
