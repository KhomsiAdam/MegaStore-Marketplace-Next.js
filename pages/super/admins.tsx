import { SuperLayout } from 'layouts/super.layout';
import { NextPage } from 'next';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from 'react';
import { generate } from 'generate-password';
import debounce from 'lodash.debounce';
import { Portal, useToast } from '@chakra-ui/react';
import {
  useCreateAdminMutation,
  useGetAdminsAccountQuery,
  GetAdminsAccountDocument,
  useDeleteAdminAccountMutation,
} from 'graphql/generated/graphql';

import {
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
export const Page: NextPage = () => {
  return (
    <div className='w-full'>
      <div className='px-4 md:px-10 py-4 md:py-7'>
        <Table />
      </div>
    </div>
  );
};

const CreateAdminDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [createAdminMutation, { loading }] = useCreateAdminMutation();

  const [admin, setAdmin] = useState({
    name: '',
    email: '',
    password: generate({ length: 8 }),
  });

  const handleCreateAdmin = () => {
    createAdminMutation({
      update: (cache, { data }: any) => {
        const { getAdminsAccount }: any = cache.readQuery({
          query: GetAdminsAccountDocument,
        });
        cache.writeQuery({
          query: GetAdminsAccountDocument,
          data: {
            getAdminsAccount: [...getAdminsAccount, data.createAdmin],
          },
        });
      },
      onCompleted: (data) => {
        const { name } = data.createAdmin;
        toast({
          title: 'Admin created',
          description: `Admin ${name} was created successfully`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      },
      onError: (error) => {
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      },
      variables: {
        input: {
          ...admin,
        },
      },
    });
  };

  const onCloseDrawer = () => {
    setAdmin({
      name: '',
      email: '',
      password: generate({ length: 8 }),
    });
    onClose();
  };
  return (
    <>
      <Button
        leftIcon={<AddOutlinedIcon className='text-white' />}
        colorScheme='teal'
        onClick={onOpen}>
        Create Admin
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onCloseDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Create a new account
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='adminame'>Name</FormLabel>
                <Input
                  onChange={({ target }) =>
                    setAdmin({ ...admin, name: target.value })
                  }
                  id='adminame'
                  placeholder='John Doe'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='adminame'>Email</FormLabel>
                <Input
                  type='email'
                  placeholder='store@mega.com'
                  onChange={({ target }) =>
                    setAdmin({ ...admin, email: target.value })
                  }
                  id='adminame'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='adminame'>Password</FormLabel>
                <Input readOnly value={admin.password} id='adminame' />
                <GenPassword setAdmin={setAdmin} />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={loading}
              onClick={handleCreateAdmin}
              leftIcon={<AddOutlinedIcon />}
              colorScheme='green'>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const GenPassword = ({ setAdmin }: any) => {
  const [value, setValue] = useState(0);
  const strong = value >= 12 ? 'green' : 'yellow';
  const onChange = debounce((value: number) => {
    setValue(value);
    const password = generate({
      length: value,
      numbers: true,
    });
    setAdmin((admin: any) => ({ ...admin, password }));
  }, 150);

  return (
    <div className='mt-3'>
      <Slider
        defaultValue={5}
        min={0}
        max={100}
        colorScheme={strong}
        onChange={onChange}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </div>
  );
};

const Table = () => {
  return (
    <div className='sm:px-6 w-full'>
      <div className='px-4 md:px-10 py-4 md:py-7'>
        <div className='flex items-center justify-between'>
          <p className='focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800'>
            Admins
          </p>
          <CreateAdminDrawer />
        </div>
      </div>
      <div className='bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10'>
        <div className='sm:flex items-center justify-between'></div>
        <div className='mt-7 overflow-x-auto'>
          <TableAdmin />
        </div>
      </div>
    </div>
  );
};

const TableAdmin = () => {
  const { data } = useGetAdminsAccountQuery();
  return (
    <div className='relative overflow-x-auto shadow-md rounded-md'>
      <div className='p-4'>
        <label htmlFor='table-search' className='sr-only'>
          Search
        </label>
        <div className='relative mt-1'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'></path>
            </svg>
          </div>
          <input
            type='text'
            id='table-search'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  '
            placeholder='Search for items'
          />
        </div>
        <table className='w-full text-sm text-left text-gray-500 border-2 mt-3 rounded-md'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-all-search'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label htmlFor='checkbox-all-search' className='sr-only'>
                    checkbox
                  </label>
                </div>
              </th>
              <th scope='col' className='px-6 py-3'>
                name
              </th>
              <th scope='col' className='px-6 py-3'>
                email
              </th>
              <th scope='col' className='px-6 py-3'>
                Created at
              </th>
              <th scope='col' className='px-6 py-3'>
                <span className='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.getAdminsAccount?.map((admin) => (
              <RowTableAccount {...admin} key={admin.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const RowTableAccount = ({ name, email, createdAt, id }: any) => {
  return (
    <tr className='bg-white border-b  hover:bg-gray-50'>
      <td className='w-4 p-4'>
        <div className='flex items-center'>
          <input
            id='checkbox-table-search-1'
            type='checkbox'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
          />
          <label htmlFor='checkbox-table-search-1' className='sr-only'>
            checkbox
          </label>
        </div>
      </td>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900  whitespace-nowrap'>
        {name}
      </th>
      <td className='px-6 py-4'>{email}</td>
      <td className='px-6 py-4'>
        {new Date(createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </td>
      <td className='px-6 py-4 text-right'>
        <DeleteAdminAccount id={id} />
      </td>
    </tr>
  );
};

function DeleteAdminAccount({ id }: any) {
  const [deleteAdminAccountMutation] = useDeleteAdminAccountMutation();
  const toast = useToast();
  const handleDeleteAdminAccount = () => {
    deleteAdminAccountMutation({
      update: (cache) => {
        const { getAdminsAccount }: any = cache.readQuery({
          query: GetAdminsAccountDocument,
        });
        cache.writeQuery({
          query: GetAdminsAccountDocument,
          data: {
            getAdminsAccount: getAdminsAccount.filter(
              (admin: any) => admin.id !== id
            ),
          },
        });
      },
      onError: (error) => {
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      },
      onCompleted: (data) => {
        if (data?.deleteAdminAccount?.id) {
          const { name } = data?.deleteAdminAccount;
          toast({
            title: 'Success',
            description: `${name} Account has been deleted`,
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: 'Error',
            description: 'Admin account not deleted',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      },
      variables: {
        id,
      },
    });
  };

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button>Trigger</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              Are you sure you want to continue with your action?
            </PopoverBody>
            <PopoverFooter d='flex' justifyContent='flex-end'>
              <ButtonGroup size='sm'>
                <Button variant='outline'>Cancel</Button>
                <Button colorScheme='red' onClick={handleDeleteAdminAccount}>
                  Delete
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
}

export const getServerSideProps = async () => {
  return { props: {} };
};

//@ts-ignore
Page.Layout = SuperLayout;

export default Page;
