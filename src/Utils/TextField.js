import React from "react";
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const TextFields = ({
  name,
  label,
  required = false,
  type = "text" || "number" || "date",
  helperText,
  disabled = false
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          type={type}
          fullWidth
          error={!!error}
          required={required}
          // helperText={error?.message ? error?.message : helperText}
          helperText = {(error && error.message) || helperText}
          label={label}
          sx={{ mb: 2 }}
          disabled={disabled}
          
        />
      )}
    />
  );
};

export default TextFields;
