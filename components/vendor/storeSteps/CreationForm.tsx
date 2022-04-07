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

const CreationForm = () => {
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
    

    await mutate({
      variables,
    });

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
                  documentVerification: files,
                })
              }
              limit={1}
              message="business document"
            />
            <UploadFiles
              handleChange={(files) => setStore({ ...store, thumbnail: files })}
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
