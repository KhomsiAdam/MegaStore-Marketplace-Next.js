import Image from 'next/image';
import Link from 'next/link';

export const ProductThumbnail = ({ product }: any) => {
  return (
    <Link href={`/product/${product?.id}`} passHref>
      <a className='flex flex-col cursor-pointer'>
        <Image
          src={product?.thumbnails[0].src}
          width={200}
          height={200}
          alt={product?.name}
        />
        <div className='flex items-center font-bold justify-evenly'>
          <div>MAD {product?.price}</div>
          <div className='p-1 text-white rounded-lg bg-primary-500'>-{product?.discount}%</div>
        </div>
      </a>
    </Link>
  );
};
export default ProductThumbnail;
