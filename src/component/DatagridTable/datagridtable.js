import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTechnology,
  fetchTechnology,
} from "../../redux-toolkit/slices/TechnologySlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditToolbar({ handleNavigate }) {
  return (
    <GridToolbarContainer>
      <Button
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => handleNavigate()}
      >
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default function DataGridTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const technology =
    useSelector((state) => state.technology.technology.data) || [];

  useEffect(() => {
    dispatch(fetchTechnology());
  }, []);

  const [rows, setRows] = React.useState();
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleNavigate = (id) => {
    navigate(`/tech-form/${id || "new"}`);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteTechnology({ id }));
    dispatch(fetchTechnology({ id }));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      type: "number",
      width: 80,
      align: "left",
      headerAlign: "left",
      editable: false,
    },
    {
      field: "name",
      headerName: "Name",
      type: "text",
      width: 180,
      editable: false,
    },
    {
      field: "created_at",
      headerName: "Created_at",
      width: 220,
      editable: false,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => handleNavigate(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={technology}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: {
            setRows,
            setRowModesModel,
            handleNavigate,
            handleDeleteClick,
          },
        }}
        components={{
          Toolbar: <EditToolbar />,
        }}
      />
    </Box>
  );
}
