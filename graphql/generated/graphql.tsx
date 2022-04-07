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

export enum AccountStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type Admin = {
  __typename?: 'Admin';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type AdminInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type ArrayOperatorInput = {
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type AuthResult = AuthPayload | User;

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['ID'];
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  products: Array<Maybe<Product>>;
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Address>;
  balance?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  default_source?: Maybe<Scalars['String']>;
  delinquent?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  invoice_prefix?: Maybe<Scalars['String']>;
  invoice_settings?: Maybe<InvoiceSettings>;
  livemode?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  next_invoice_sequence?: Maybe<Scalars['Int']>;
  object?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  preferred_locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipping?: Maybe<Scalars['String']>;
  tax_exempt?: Maybe<Scalars['String']>;
  test_clock?: Maybe<Scalars['String']>;
};

export type FileInput = {
  files?: InputMaybe<Array<Scalars['Upload']>>;
};

export type InvoiceSettings = {
  __typename?: 'InvoiceSettings';
  custom_fields?: Maybe<Scalars['String']>;
  default_payment_method?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
};

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String'];
  id: Scalars['ID'];
  src: Scalars['String'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCustomer?: Maybe<Customer>;
  addImage?: Maybe<Array<Scalars['String']>>;
  addSuper: Super;
  confirmUserIsSeller?: Maybe<User>;
  createAdmin: Admin;
  createBrand: Brand;
  createCategory: Category;
  createProduct: Product;
  createStore: Store;
  deleteBrand?: Maybe<Brand>;
  deleteCategory?: Maybe<Category>;
  deleteProduct?: Maybe<Product>;
  deleteStore?: Maybe<Store>;
  login?: Maybe<AuthPayload>;
  register?: Maybe<AuthPayload>;
  subscribeToSub?: Maybe<ResponseSub>;
  updatePassword?: Maybe<User>;
  updateProduct?: Maybe<Product>;
  updateStoreStatus?: Maybe<Store>;
  updateUserAccountStatus?: Maybe<User>;
};


export type MutationAddCustomerArgs = {
  input?: InputMaybe<InputCustomer>;
};


export type MutationAddImageArgs = {
  input?: InputMaybe<FileInput>;
};


export type MutationAddSuperArgs = {
  input?: InputMaybe<SuperInput>;
};


export type MutationConfirmUserIsSellerArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAdminArgs = {
  input?: InputMaybe<AdminInput>;
};


export type MutationCreateBrandArgs = {
  name: Scalars['String'];
  thumbnail: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
};


export type MutationCreateProductArgs = {
  input: ProductInput;
};


export type MutationCreateStoreArgs = {
  document_verification?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  thumbnail: Array<InputMaybe<Scalars['Upload']>>;
};


export type MutationDeleteBrandArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['String'];
};


export type MutationDeleteStoreArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationSubscribeToSubArgs = {
  input?: InputMaybe<InputSubscribe>;
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['String'];
  input: ProductInput;
};


export type MutationUpdateStoreStatusArgs = {
  id: Scalars['ID'];
  status: StoreStatus;
};


export type MutationUpdateUserAccountStatusArgs = {
  id: Scalars['ID'];
  status: AccountStatus;
};

export type Node = {
  id: Scalars['ID'];
};

export type NumberQueryOperatorInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  nextCursor?: Maybe<Scalars['String']>;
};

export type PaginateEntity = {
  data: Array<Node>;
  pageInfo: PageInfo;
};

export type Product = {
  __typename?: 'Product';
  brand?: Maybe<Brand>;
  category: Array<Maybe<Category>>;
  description: Scalars['String'];
  discount: Scalars['Float'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Int'];
  store: Store;
  thumbnails: Array<Maybe<Media>>;
};

export type ProductInput = {
  brand?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  discount?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  store?: InputMaybe<Scalars['ID']>;
  thumbnails?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
};

export type Query = {
  __typename?: 'Query';
  brand?: Maybe<Brand>;
  brands: Array<Maybe<Brand>>;
  categories: Array<Maybe<Category>>;
  getAll?: Maybe<Array<Super>>;
  getCustomers: Array<Maybe<Customer>>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  store?: Maybe<Store>;
  stores?: Maybe<Array<Maybe<Store>>>;
};


export type QueryBrandArgs = {
  id: Scalars['ID'];
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryStoreArgs = {
  id: Scalars['String'];
};


export type QueryStoresArgs = {
  sort?: InputMaybe<Sort>;
  status?: InputMaybe<StoreStatus>;
};

export enum Role {
  Admin = 'ADMIN',
  Seller = 'SELLER',
  User = 'USER'
}

export enum Sort {
  Ascending = 'ascending',
  Descending = 'descending'
}

export type Store = {
  __typename?: 'Store';
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: User;
  products: Array<Maybe<Product>>;
  status: StoreStatus;
  thumbnail: Array<Maybe<Media>>;
};

export type StoreFilterInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum StoreStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

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

export enum TypeAccountEnum {
  Basic = 'BASIC',
  Expert = 'EXPERT',
  Pro = 'PRO',
  Starter = 'STARTER'
}

export type User = {
  __typename?: 'User';
  AccountStatus: AccountStatus;
  Store?: Maybe<Store>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isSeller: Scalars['Boolean'];
  lastName: Scalars['String'];
  role: Role;
  typeAccount?: Maybe<TypeAccountEnum>;
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type InputCustomer = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type InputSubscribe = {
  customerId?: InputMaybe<Scalars['String']>;
  priceId?: InputMaybe<Scalars['String']>;
};

export type Paginate = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
};

export type ResponseSub = {
  __typename?: 'responseSub';
  clientSecret?: Maybe<Scalars['String']>;
  subscription?: Maybe<Scalars['String']>;
};

export type StoreFragment = { __typename?: 'Store', id: string, name: string, status: StoreStatus, thumbnail: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, products: Array<{ __typename?: 'Product', id: string, name: string, description: string, price: number, discount: number, stock: number, thumbnails: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, category: Array<{ __typename?: 'Category', id: string, name: string } | null>, brand?: { __typename?: 'Brand', id: string, name: string, thumbnail: string } | null } | null> };

export type UserFieldsFragment = { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, role: Role, AccountStatus: AccountStatus, typeAccount?: TypeAccountEnum | null, isSeller: boolean, Store?: { __typename?: 'Store', id: string, name: string, status: StoreStatus, thumbnail: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, products: Array<{ __typename?: 'Product', id: string, name: string, description: string, price: number, discount: number, stock: number, thumbnails: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, brand?: { __typename?: 'Brand', id: string, name: string, thumbnail: string } | null, category: Array<{ __typename?: 'Category', id: string, name: string } | null> } | null> } | null };

export type UserFragment = { __typename?: 'User', id: string, role: Role };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, role: Role, AccountStatus: AccountStatus, typeAccount?: TypeAccountEnum | null, isSeller: boolean, Store?: { __typename?: 'Store', id: string, name: string, status: StoreStatus, thumbnail: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, products: Array<{ __typename?: 'Product', id: string, name: string, description: string, price: number, discount: number, stock: number, thumbnails: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, brand?: { __typename?: 'Brand', id: string, name: string, thumbnail: string } | null, category: Array<{ __typename?: 'Category', id: string, name: string } | null> } | null> } | null } } | null };

export type RegisterMutationVariables = Exact<{
  input?: InputMaybe<UserInput>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, role: Role, AccountStatus: AccountStatus, typeAccount?: TypeAccountEnum | null, isSeller: boolean, Store?: { __typename?: 'Store', id: string, name: string, status: StoreStatus, thumbnail: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, products: Array<{ __typename?: 'Product', id: string, name: string, description: string, price: number, discount: number, stock: number, thumbnails: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, brand?: { __typename?: 'Brand', id: string, name: string, thumbnail: string } | null, category: Array<{ __typename?: 'Category', id: string, name: string } | null> } | null> } | null } } | null };

export type CreateStoreMutationVariables = Exact<{
  documentVerification?: InputMaybe<Scalars['Upload']>;
  thumbnail: Array<InputMaybe<Scalars['Upload']>> | InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
}>;


export type CreateStoreMutation = { __typename?: 'Mutation', createStore: { __typename?: 'Store', id: string, name: string, status: StoreStatus, thumbnail: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, products: Array<{ __typename?: 'Product', id: string, name: string, description: string, price: number, discount: number, stock: number, thumbnails: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, category: Array<{ __typename?: 'Category', id: string, name: string } | null>, brand?: { __typename?: 'Brand', id: string, name: string, thumbnail: string } | null } | null> } };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string } | null> };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', description: string, discount: number, id: string, name: string, price: number, stock: number, brand?: { __typename?: 'Brand', id: string, name: string, thumbnail: string } | null, category: Array<{ __typename?: 'Category', id: string, name: string } | null>, store: { __typename?: 'Store', id: string, name: string, status: StoreStatus, thumbnail: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, products: Array<{ __typename?: 'Product', id: string, name: string, description: string, price: number, discount: number, stock: number, thumbnails: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, category: Array<{ __typename?: 'Category', id: string, name: string } | null>, brand?: { __typename?: 'Brand', id: string, name: string, thumbnail: string } | null } | null> }, thumbnails: Array<{ __typename?: 'Media', alt: string, id: string, src: string, type: string } | null> } | null> | null };

export type StoreQueryVariables = Exact<{
  storeId: Scalars['String'];
}>;


export type StoreQuery = { __typename?: 'Query', store?: { __typename?: 'Store', id: string, name: string, status: StoreStatus, thumbnail: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, products: Array<{ __typename?: 'Product', id: string, name: string, description: string, price: number, discount: number, stock: number, thumbnails: Array<{ __typename?: 'Media', id: string, src: string, alt: string, type: string } | null>, category: Array<{ __typename?: 'Category', id: string, name: string } | null>, brand?: { __typename?: 'Brand', id: string, name: string, thumbnail: string } | null } | null> } | null };

export const StoreFragmentDoc = gql`
    fragment store on Store {
  id
  name
  thumbnail {
    id
    src
    alt
    type
  }
  products {
    id
    name
    description
    price
    thumbnails {
      id
      src
      alt
      type
    }
    discount
    category {
      id
      name
    }
    brand {
      id
      name
      thumbnail
    }
    stock
  }
  status
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment userFields on User {
  id
  firstName
  lastName
  email
  role
  AccountStatus
  Store {
    id
    name
    thumbnail {
      id
      src
      alt
      type
    }
    products {
      id
      name
      description
      price
      thumbnails {
        id
        src
        alt
        type
      }
      discount
      brand {
        id
        name
        thumbnail
      }
      category {
        id
        name
      }
      stock
    }
    status
  }
  typeAccount
  isSeller
}
    `;
export const UserFragmentDoc = gql`
    fragment user on User {
  id
  role
}
    `;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: UserInput) {
  register(input: $input) {
    token
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateStoreDocument = gql`
    mutation CreateStore($documentVerification: Upload, $thumbnail: [Upload]!, $name: String!) {
  createStore(
    document_verification: $documentVerification
    thumbnail: $thumbnail
    name: $name
  ) {
    ...store
  }
}
    ${StoreFragmentDoc}`;
export type CreateStoreMutationFn = Apollo.MutationFunction<CreateStoreMutation, CreateStoreMutationVariables>;

/**
 * __useCreateStoreMutation__
 *
 * To run a mutation, you first call `useCreateStoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStoreMutation, { data, loading, error }] = useCreateStoreMutation({
 *   variables: {
 *      documentVerification: // value for 'documentVerification'
 *      thumbnail: // value for 'thumbnail'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateStoreMutation(baseOptions?: Apollo.MutationHookOptions<CreateStoreMutation, CreateStoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStoreMutation, CreateStoreMutationVariables>(CreateStoreDocument, options);
      }
export type CreateStoreMutationHookResult = ReturnType<typeof useCreateStoreMutation>;
export type CreateStoreMutationResult = Apollo.MutationResult<CreateStoreMutation>;
export type CreateStoreMutationOptions = Apollo.BaseMutationOptions<CreateStoreMutation, CreateStoreMutationVariables>;
export const CategoriesDocument = gql`
    query Categories {
  categories {
    id
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    brand {
      id
      name
      thumbnail
    }
    category {
      id
      name
    }
    description
    discount
    id
    name
    price
    stock
    store {
      ...store
    }
    thumbnails {
      alt
      id
      src
      type
    }
  }
}
    ${StoreFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const StoreDocument = gql`
    query Store($storeId: String!) {
  store(id: $storeId) {
    ...store
  }
}
    ${StoreFragmentDoc}`;

/**
 * __useStoreQuery__
 *
 * To run a query within a React component, call `useStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStoreQuery({
 *   variables: {
 *      storeId: // value for 'storeId'
 *   },
 * });
 */
export function useStoreQuery(baseOptions: Apollo.QueryHookOptions<StoreQuery, StoreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StoreQuery, StoreQueryVariables>(StoreDocument, options);
      }
export function useStoreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StoreQuery, StoreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StoreQuery, StoreQueryVariables>(StoreDocument, options);
        }
export type StoreQueryHookResult = ReturnType<typeof useStoreQuery>;
export type StoreLazyQueryHookResult = ReturnType<typeof useStoreLazyQuery>;
export type StoreQueryResult = Apollo.QueryResult<StoreQuery, StoreQueryVariables>;