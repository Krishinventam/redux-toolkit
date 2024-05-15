import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { technologyAdd } from '../../redux-toolkit/slices/TechnologySlice';
import { GridToolbarContainer } from '@mui/x-data-grid';

function EditToolbar() {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    
    const newTechnology = {
      name: "New Technology",
      created_at: new Date().toISOString(),
    };
    dispatch(technologyAdd(newTechnology));
  };

  return (
    <GridToolbarContainer>
      <Button
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddClick}
      >
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default EditToolbar;
