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

const CreationForm = () => {
  const [store, setStore] = useState({
    documentVerification: null,
    thumbnail: null,
    name: null,
  });

  const [mutate, data] = useCreateStoreMutation();

  const createStoreSubmit = async () => {
    const { data } = await mutate({
      variables: {
        documentVerification: store.documentVerification,
        thumbnail: store.thumbnail,
        name: store.name,
      },
    });
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Form Layout">
          <Stack spacing={3}>
            <TextField
              id="name-basic"
              label="Name"
              variant="outlined"
              defaultValue="Nirav Joshi"
            />
            <TextField id="email-basic" label="Email" variant="outlined" />
            <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden />
            </Button>
            <TextField
              id="pass-basic"
              label="Password"
              type="password"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Text Area"
              multiline
              rows={4}
              defaultValue="Default Value"
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
