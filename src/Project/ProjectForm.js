import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import TextFields from "../Utils/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addProject,
  editProject,
  getProject,
} from "../redux-toolkit/slices/ProjectTableSlice";

const ProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const methods = useForm({});
  const { handleSubmit, reset, watch } = methods;

  const variable = watch();
  const onSubmit = (newData) => {
    if (!newData.id) {
      dispatch(addProject(variable)).then((res) => {
        console.log("res", res);
        if (!res.error) navigate("/project");
      });
    } else {
      dispatch(editProject(newData)).then((res) => {
        if (!res.error) navigate("/project");
      });
    }
  };

  useEffect(() => {
    dispatch(getProject({id})).then((res) => {
       (!res.error) && reset(res.payload.data);

    });
  }, [id]);
  // useEffect(() =>{
  //   dispatch(editProject({id})).then((res) =>{
  //     (!res.error) && reset(res.payload.data)
  //   })
  // },[id])

  return (
    <Stack
      sx={{
        alignItems: "center",
        textAlign: "center",
        padding: "180px",
      }}
    >
      <Typography variant="h4"> Project Form</Typography>
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
              <TextFields name="name" label="Name" required type="text" />
              <TextFields name="created_at" required type="date" />
              <TextFields
                name="technologies"
                label="Technologies"
                required
                type="text"
              />
            </Grid>
            <Button
              variant="outlined"
              color="secondary"
              type="submit"
              sx={{ mt: 1 }}
            >
              {id === "new" ? "Add Project" : "Update Project"}
            </Button>
          </form>
        </Box>
      </FormProvider>
    </Stack>
  );
};

export default ProjectForm;
