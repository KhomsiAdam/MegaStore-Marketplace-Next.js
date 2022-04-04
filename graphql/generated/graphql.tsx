import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['ID'];
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};

export type Cart = {
  __typename?: 'Cart';
  amount: Scalars['Float'];
  id: Scalars['ID'];
  products: Array<Maybe<Product>>;
  user: Scalars['String'];
};

export type CartInput = {
  amount: Scalars['Float'];
  products: Array<Scalars['ID']>;
  user: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};

export type Dimensions = {
  __typename?: 'Dimensions';
  color?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
};

export type DimensionsInput = {
  color?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  files?: InputMaybe<Array<Scalars['Upload']>>;
};

export type Image = {
  __typename?: 'Image';
  alt: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  src: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  Login?: Maybe<UserLogin>;
  addImage?: Maybe<Array<Image>>;
  addSuper: Super;
  createBrand: Brand;
  createCart: Cart;
  createCategory: Category;
  createOrder: Order;
  createProduct: Product;
  createStore: Store;
  deleteBrand?: Maybe<Brand>;
  deleteCategory?: Maybe<Category>;
  deleteStore?: Maybe<Store>;
  register: User;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAddImageArgs = {
  input?: InputMaybe<FileInput>;
};


export type MutationAddSuperArgs = {
  input?: InputMaybe<SuperInput>;
};


export type MutationCreateBrandArgs = {
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};


export type MutationCreateCartArgs = {
  input: CartInput;
};


export type MutationCreateCategoryArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};


export type MutationCreateOrderArgs = {
  input: OrderInput;
};


export type MutationCreateProductArgs = {
  input: ProductInput;
};


export type MutationCreateStoreArgs = {
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};


export type MutationDeleteBrandArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStoreArgs = {
  id: Scalars['ID'];
};


export type MutationRegisterArgs = {
  input?: InputMaybe<UserInput>;
};

export type Order = {
  __typename?: 'Order';
  address: Scalars['String'];
  cart?: Maybe<Cart>;
  city: Scalars['String'];
  country: Scalars['String'];
  delivery: Scalars['String'];
  estimatedTime: Scalars['String'];
  id: Scalars['ID'];
  status: Scalars['String'];
  traking: Scalars['String'];
  user: Scalars['String'];
  zipCode: Scalars['Int'];
};

export type OrderInput = {
  address: Scalars['String'];
  cart: Scalars['ID'];
  city: Scalars['String'];
  country: Scalars['String'];
  delivery: Scalars['String'];
  estimatedTime: Scalars['String'];
  status: Scalars['String'];
  traking: Scalars['String'];
  user: Scalars['String'];
  zipCode: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  nextCursor?: Maybe<Scalars['String']>;
};

export type PaginateStore = {
  __typename?: 'PaginateStore';
  data: Array<Store>;
  pageInfo: PageInfo;
};

export type Product = {
  __typename?: 'Product';
  brand: Brand;
  category: Category;
  description: Scalars['String'];
  discount: Scalars['Float'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Int'];
  store: Store;
  thumbnails: Array<Maybe<Scalars['String']>>;
  variants: Array<Maybe<Variants>>;
};

export type ProductInput = {
  brand: Scalars['ID'];
  category: Array<InputMaybe<Scalars['ID']>>;
  description: Scalars['String'];
  discount: Scalars['Float'];
  name: Scalars['String'];
  price: Scalars['Float'];
  store: Scalars['ID'];
  thumbnails: Array<InputMaybe<Scalars['String']>>;
  variants: Array<InputMaybe<VariantsInput>>;
};

export type Query = {
  __typename?: 'Query';
  admin?: Maybe<Scalars['String']>;
  cart?: Maybe<Cart>;
  carts?: Maybe<Array<Maybe<Cart>>>;
  getAll?: Maybe<Array<Super>>;
  getAllUsers?: Maybe<Array<User>>;
  hello?: Maybe<Scalars['String']>;
  orders?: Maybe<Order>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  store?: Maybe<Store>;
  stores?: Maybe<PaginateStore>;
  user?: Maybe<Scalars['String']>;
};


export type QueryCartArgs = {
  id: Scalars['String'];
};


export type QueryOrdersArgs = {
  user: Scalars['String'];
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryStoreArgs = {
  id: Scalars['String'];
};


export type QueryStoresArgs = {
  input?: InputMaybe<Paginate>;
};

export enum Role {
  Seller = 'SELLER',
  User = 'USER'
}

export type Store = {
  __typename?: 'Store';
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: User;
  products: Array<Maybe<Product>>;
  status: StoreStatus;
  thumbnail: Scalars['String'];
};

export enum StoreStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Super = {
  __typename?: 'Super';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SuperInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  role: Role;
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: Role;
};

export type UserLogin = {
  __typename?: 'UserLogin';
  accessToken?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Variants = {
  __typename?: 'Variants';
  dimensions: Array<Maybe<Dimensions>>;
  price: Scalars['Float'];
  sku: Scalars['String'];
  stock: Scalars['Int'];
};

export type VariantsInput = {
  dimensions: Array<InputMaybe<DimensionsInput>>;
  price: Scalars['Float'];
  sku: Scalars['String'];
  stock: Scalars['Int'];
};

export type Paginate = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello?: string | null };


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;