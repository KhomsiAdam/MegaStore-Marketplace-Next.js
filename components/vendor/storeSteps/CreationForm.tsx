import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "@/components/baseCard";
import { useCreateStoreMutation } from "@/graphql/generated/graphql";
import { useState } from "react";
import { UploadFiles } from "@/components/upload";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUserData } from "@/slices/index";

const CreationForm = () => {
  const dispatch = useAppDispatch();
  const User = useAppSelector((state) => state.user);
  const [store, setStore] = useState<{
    name: string;
    documentVerification: File[] | null;
    thumbnail: File[] | [];
  }>({
    documentVerification: [],
    thumbnail: [],
    name: "",
  });

  const [mutate, data] = useCreateStoreMutation();

  const createStoreSubmit = async () => {
    const variables = {
      name: store.name,
      documentVerification: store.documentVerification,
      thumbnail: store.thumbnail,
    };

    console.log(variables);

    const { data } = await mutate({
      variables,
    });

    

    dispatch(
      setUserData({
        token: User.token || "",
        user: data?.createStore.owner,
      })
    );
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Create Store :">
          <Stack spacing={3}>
            <TextField
              id="name-basic"
              label="Name"
              onChange={(e) => setStore({ ...store, name: e.target.value })}
              variant="outlined"
            />
            <UploadFiles
              handleChange={(files) =>
                setStore({
                  ...store,
                  documentVerification: files.map((e) => e?.file),
                })
              }
              limit={1}
              message="business document"
            />
            <UploadFiles
              handleChange={(files) =>
                setStore({ ...store, thumbnail: files.map((e) => e?.file) })
              }
              limit={3}
              message="Store Upload"
            />
          </Stack>
          <br />
          <Button variant="contained" mt={2} onClick={createStoreSubmit}>
            Submit
          </Button>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default CreationForm;
