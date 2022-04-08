import { SuperLayout } from 'layouts/super.layout';
import { NextPage } from 'next';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from 'react';
import { generate } from 'generate-password';
import debounce from 'lodash.debounce';

import {
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
        <div className='flex items-center justify-between'>
          <p className='focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800'>
            Admins
          </p>
          <CreateAdminDrawer />
        </div>
      </div>
    </div>
  );
};

const CreateAdminDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [admin, setAdmin] = useState({
    name: '',
    email: '',
    password: generate({ length: 8 }),
  });

  const handleCreateAdmin = () => {
    console.log(admin);
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
export const getServerSideProps = async () => {
  return { props: {} };
};

//@ts-ignore
Page.Layout = SuperLayout;

export default Page;
