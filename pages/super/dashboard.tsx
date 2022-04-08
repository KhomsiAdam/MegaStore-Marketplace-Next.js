import type { NextPage } from 'next';
import { SuperLayout } from 'layouts/super.layout';
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { gql, useMutation } from '@apollo/client';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  AccountStatus,
  Role,
  useConfirmUserIsSellerMutation,
  useDeleteUserAccountMutation,
  UsersAccountDocument,
  useUsersAccountQuery,
} from '@/graphql/generated/graphql';

export const Page: NextPage = ({}) => {
  return (
    <>
      <Dashboard />
    </>
  );
};

//@ts-ignore
Page.Layout = SuperLayout;

export const getServerSideProps = async () => {
  return { props: {} };
};

export default Page;

const Dashboard = () => {
  const { data, refetch } = useUsersAccountQuery({
    variables: {
      role: Role.Seller,
      isSeller: false,
    },
  });

  useEffect(() => {
    const refetchQuery = () => refetch();
    window.addEventListener('focus', refetchQuery);
    return () => window.removeEventListener('focus', refetchQuery);
  }, []);

  return (
    <div className='w-full'>
      <div className='px-4 md:px-10 py-4 md:py-7'>
        <div className='flex items-center justify-between'>
          <p className='focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800'>
            Sellers
          </p>
          <div className='py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded'>
            <p>Sort By:</p>
            <select
              aria-label='select'
              className='focus:text-indigo-600 focus:outline-none bg-transparent ml-1'>
              <option className='text-sm text-indigo-800'>Latest</option>
              <option className='text-sm text-indigo-800'>Oldest</option>
              <option className='text-sm text-indigo-800'>Latest</option>
            </select>
          </div>
        </div>
      </div>
      <div className='bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10'>
        <div className='sm:flex items-center justify-between'>
          <div className='flex items-center'>
            <a className='rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800'>
              <div className='py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full'>
                <p>All</p>
              </div>
            </a>
            <a className='rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8'>
              <div className='py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full '>
                <p>Done</p>
              </div>
            </a>
            <a className='rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8'>
              <div className='py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full '>
                <p>Pending</p>
              </div>
            </a>
          </div>
          <button className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded'>
            <p className='text-sm font-medium leading-none text-white'>
              Add Task
            </p>
          </button>
        </div>
        <div className='mt-7 overflow-x-auto'>
          <table className='w-full whitespace-nowrap'>
            <tbody>
              {data?.getUsersAccount.map((user) => {
                return <RowAccount {...user} key={user?.id} />;
              })}
              <tr className='h-3'></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const RowAccount = ({
  id,
  email,
  firstName,
  lastName,
  isSeller,
  accountStatus,
}: any) => {
  const isActive = accountStatus === AccountStatus.Active;
  const isVerified = isSeller === true;

  const [deleteAccountMutation] = useDeleteUserAccountMutation();
  const [confirmUserIsSellerMutation, { loading }] =
    useConfirmUserIsSellerMutation();

  const toast = useToast();

  const actionAccount = () => {
    confirmUserIsSellerMutation({
      onCompleted: (data) => {
        const { firstName, lastName } = data?.confirmUserIsSeller!;
        toast({
          title: 'Account Verified',
          description: `${firstName} ${lastName} Account has been verified`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      },
      refetchQueries: [UsersAccountDocument, 'UsersAccount'],
      variables: {
        id,
      },
    });
  };

  const deleteAccount = async () => {
    deleteAccountMutation({
      onCompleted: (data) => {
        const { firstName, lastName } = data?.deleteUserAccount!;
        toast({
          title: 'Account Deleted',
          description: `${firstName} ${lastName} Account has been deleted `,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      },
      refetchQueries: [UsersAccountDocument, 'UsersAccount'],
      variables: {
        id,
      },
    });
  };

  return (
    <tr className='h-16 border border-gray-100'>
      <td className='pl-5'>
        <div className='w-10 h-10'>
          <img
            className='rounded-full object-cover'
            src='https://pbs.twimg.com/profile_images/1450115233205272576/CFTTK-0I_400x400.jpg'
          />
        </div>
      </td>
      <td>
        <div className='flex items-center'>
          <p className='font-medium text-gray-800'>
            {firstName} {lastName}
          </p>
        </div>
      </td>
      <td className='p-2 whitespace-nowrap'>
        <div className='text-left'>{email}</div>
      </td>
      <td>
        <span
          className={`text-xs capitalize px-3 py-1 rounded-full font-semibold ${
            isActive ? 'bg-green-200 text-green-900' : 'bg-red-200 text-red-900'
          }`}>
          {isActive ? 'active' : 'inactive'}
        </span>
      </td>
      <td className='pl-5'>
        <div className='flex items-center'>
          <AttachmentOutlinedIcon />
          <p className='text-sm leading-none text-gray-600 ml-2'>04/07</p>
        </div>
      </td>
      <td className='pl-5'>
        <Popover>
          <PopoverTrigger>
            <button
              className={`px-3 py-1 capitalize text-xs font-semibold rounded-full ${
                isVerified
                  ? 'text-green-900 bg-green-200'
                  : 'text-red-700 bg-red-100'
              } `}>
              {isVerified ? 'verified' : 'Not verified'}
            </button>
          </PopoverTrigger>
          <Portal>
            {!isVerified && (
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Verify this Seller</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody d='flex' justifyContent='flex-start'>
                  <ButtonGroup size='sm'>
                    <Button variant='outline'>Cancel</Button>
                    <Button onClick={actionAccount} colorScheme='green'>
                      Verify
                    </Button>
                  </ButtonGroup>
                </PopoverBody>
              </PopoverContent>
            )}
          </Portal>
        </Popover>
      </td>
      <td className='pl-4'>
        <Menu>
          <MenuButton as={Button} rightIcon={<KeyboardArrowDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>View</MenuItem>
            <MenuItem onClick={deleteAccount}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </td>
    </tr>
  );
};

// function UploadFile() {
//   const [preview, setPreview] = useState<any>([]);

//   const [mutate, { data }] = useMutation(MUTATION, {
//     onCompleted: () => {
//       console.log('completed');
//     },
//   });

//   console.log(data);

//   const onChange = async (e: any) => {
//     const files = e.target.files;

//     const image_preview = [...files].map((file: any) => {
//       return { [file.name]: URL.createObjectURL(file) };
//     });

//     setPreview((prev: any) => [...prev, ...image_preview]);

//     // const image_preview = { [file.name]: URL.createObjectURL(file) };

//     // console.log(image_preview);

//     // console.log({
//     //   variables: {
//     //     name: 'store 51',
//     //     thumbnail: [file],
//     //     document_verification: [file],
//     //   },
//     // });

//     // mutate({
//     //   variables: {
//     //     name: 'store 51',
//     //     thumbnail: [file],
//     //     document_verification: [file],
//     //   },
//     // });
//   };

//   return (
//     <div>
//       <input
//         onChange={onChange}
//         type='file'
//         className='block w-full text-sm text-slate-500
//    file:mr-4 file:py-2 file:px-4
//    file:rounded-full file:border-0
//    file:text-sm file:font-semibold
//    file:bg-violet-50 file:text-violet-700
//    hover:file:bg-violet-100
//  '
//       />

//       {preview.map((item: any, key) => {
//         return <img src={Object.values(item)[0]} key={key} />;
//       })}
//     </div>
//   );
// }