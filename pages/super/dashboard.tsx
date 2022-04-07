/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import type { NextPage } from 'next';
import { Layout } from 'layouts/super.layout';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { LegacyRef, useRef, useState } from 'react';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';

import { gql, useMutation } from '@apollo/client';

function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button>
      
      <Modal
        motionPreset='slideInBottom'
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export const Page: NextPage = ({}) => {
  return (
    <>
      {/* <Button colorScheme='blue'>Button</Button> */}
      {/* <h1>Hello</h1> */}
      <InitialFocus />
      <UploadFile />
      <Dashboard />
    </>
  );
};

//@ts-ignore
Page.Layout = Layout;

export const getServerSideProps = async () => {
  return { props: {} };
};

export default Page;

const MUTATION = gql`
  mutation CreateStore(
    $name: String!
    $thumbnail: [Upload]!
    $document_verification: [Upload]!
  ) {
    createStore(
      name: $name
      thumbnail: $thumbnail
      document_verification: $document_verification
    ) {
      id
      thumbnail {
        id
        src
        alt
      }
    }
  }
`;
function UploadFile() {
  const [preview, setPreview] = useState<any>([]);

  const [mutate, { data }] = useMutation(MUTATION, {
    onCompleted: () => {
      console.log('completed');
    },
  });
  console.log(data);

  const onChange = async (e: any) => {
    const files = e.target.files;

    const image_preview = [...files].map((file: any) => {
      return { [file.name]: URL.createObjectURL(file) };
    });

    setPreview((prev: any) => [...prev, ...image_preview]);

    // const image_preview = { [file.name]: URL.createObjectURL(file) };

    // console.log(image_preview);

    // console.log({
    //   variables: {
    //     name: 'store 51',
    //     thumbnail: [file],
    //     document_verification: [file],
    //   },
    // });

    // mutate({
    //   variables: {
    //     name: 'store 51',
    //     thumbnail: [file],
    //     document_verification: [file],
    //   },
    // });
  };

  return (
    <div>
      <input
        onChange={onChange}
        type='file'
        className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 '
      />

      {preview.map((item: any, key) => {
        return <img src={Object.values(item)[0]} key={key} />;
      })}
    </div>
  );
}

const Dashboard = () => {
  return (
    <div className='w-full sm:px-6'>
      <div className='px-4 py-4 md:px-10 md:py-7'>
        <div className='flex items-center justify-between'>
          <p
            // tabindex='0'
            className='text-base font-bold leading-normal text-gray-800 focus:outline-none sm:text-lg md:text-xl lg:text-2xl'>
            Tasks
          </p>
          <div className='flex items-center px-4 py-3 text-sm font-medium leading-none text-gray-600 bg-gray-200 rounded cursor-pointer hover:bg-gray-300'>
            <p>Sort By:</p>
            <select
              aria-label='select'
              className='ml-1 bg-transparent focus:text-indigo-600 focus:outline-none'>
              <option className='text-sm text-indigo-800'>Latest</option>
              <option className='text-sm text-indigo-800'>Oldest</option>
              <option className='text-sm text-indigo-800'>Latest</option>
            </select>
          </div>
        </div>
      </div>
      <div className='px-4 py-4 bg-white md:py-7 md:px-8 xl:px-10'>
        <div className='items-center justify-between sm:flex'>
          <div className='flex items-center'>
            <a
              className='rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800'
              href=' javascript:void(0)'>
              <div className='px-8 py-2 text-indigo-700 bg-indigo-100 rounded-full'>
                <p>All</p>
              </div>
            </a>
            <a
              className='ml-4 rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 sm:ml-8'
              href='javascript:void(0)'>
              <div className='px-8 py-2 text-gray-600 rounded-full hover:text-indigo-700 hover:bg-indigo-100 '>
                <p>Done</p>
              </div>
            </a>
            <a
              className='ml-4 rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 sm:ml-8'
              href='javascript:void(0)'>
              <div className='px-8 py-2 text-gray-600 rounded-full hover:text-indigo-700 hover:bg-indigo-100 '>
                <p>Pending</p>
              </div>
            </a>
          </div>
          <button
            // onclick='popuphandler(true)'
            className='inline-flex items-start justify-start px-6 py-3 mt-4 bg-indigo-700 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:mt-0 hover:bg-indigo-600 focus:outline-none'>
            <p className='text-sm font-medium leading-none text-white'>
              Add Task
            </p>
          </button>
        </div>
        <div className='overflow-x-auto mt-7'>
          <table className='w-full whitespace-nowrap'>
            <tbody>
              <RowAccount />
              <tr className='h-3'></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const RowAccount = () => {
  return (
    <tr className='h-16 border border-gray-100'>
      <td className='pl-5'>
        <div className='flex-shrink-0 w-10 h-10 mr-2 sm:mr-3'>
          <img
            className='object-cover rounded-full'
            src='https://pbs.twimg.com/profile_images/1450115233205272576/CFTTK-0I_400x400.jpg'
          />
        </div>
      </td>
      <td>
        <div className='flex items-center pl-5'>
          <p className='font-medium text-gray-800'>Philip Harbach</p>
        </div>
      </td>
      <td className='p-2 whitespace-nowrap'>
        <div className='text-left'>alexshatov@gmail.com</div>
      </td>
      <td>
        <span className='px-3 py-1 text-xs font-semibold text-green-900 capitalize bg-green-200 rounded-full'>
          active
        </span>
      </td>
      <td className='pl-5'>
        <div className='flex items-center'>
          <AttachmentOutlinedIcon />
          <p className='ml-2 text-sm leading-none text-gray-600'>04/07</p>
        </div>
      </td>
      <td className='pl-5'>
        <button className='px-3 py-3 text-sm leading-none text-red-700 bg-red-100 rounded focus:outline-none'>
          Due today at 18:00
        </button>
      </td>
      <td className='pl-4'>
        <button className='px-5 py-3 text-sm leading-none text-gray-600 bg-gray-100 rounded focus:ring-2 focus:ring-offset-2 focus:ring-red-300 hover:bg-gray-200 focus:outline-none'>
          View
        </button>
      </td>
    </tr>
  );
};
