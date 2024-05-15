import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import TextFields from "../Utils/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addTechnology,
  editTechnology,
  getTechnology,
} from "../redux-toolkit/slices/TechnologySlice";

const Technologyform = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const methods = useForm({});
  const { handleSubmit, reset, watch } = methods;

  const variable = watch();
  const onSubmit = (newData) => {
    if (!newData.id) {
      dispatch(addTechnology(variable)).then((res) => {
        if (!res.error) navigate("/table");
      });
    } else {
      dispatch(editTechnology(newData)).then((res) => {
        if (!res.error) navigate("/table");
      });
    }
  };

  useEffect(() => {
    dispatch(getTechnology({ id })).then((res) => {
      !res.error && reset(res.payload.data);
    });
  }, [id]);

  return (
    <Stack
      sx={{
        alignItems: "center",
        textAlign: "center",
        padding: "180px",
      }}
    >
      <Typography variant="h4"> Technology Form</Typography>
      <FormProvider {...methods}>
        <Box sx={{ alignItems: "center" }}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            style={{ alignItems: "center" }}
          >
            <Grid
              spacing={2}
              direction="row"
              sx={{ mt: 2, alignItems: "center", width: "350px" }}
            >
              <TextFields name="name" required type="text" />
              <TextFields name="created_at" required type="date" />
            </Grid>
            <Button
              variant="outlined"
              color="secondary"
              type="submit"
              sx={{ mt: 1 }}
            >
              {id === "new" ? "Add Technology" : "Update Technology"}
            </Button>
          </form>
        </Box>
      </FormProvider>
    </Stack>
  );
};

export default Technologyform;
