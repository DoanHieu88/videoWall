import React from "react";
import { FormControl, MenuItem, Select, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

const SelectForm = ({
  width,
  disabled,
  keyForm,
  list,
  className,
  customStyle,
  defaultValue,
}) => {
  const classes = useStyles();
  const { control } = useFormContext();

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <FormControl
      className={classes.formControl}
      style={{ width: width || "100%" }}
      variant="outlined"
      size="small"
    >
      <Controller
        rules={{
          required: { message: "This field is required" },
        }}
        control={control}
        name={keyForm}
        defaultValue={defaultValue}
        render={({ field }) => {
          return (
            <Select
              placeholder="OFF"
              open={isOpen}
              onClose={handleClose}
              onOpen={handleOpen}
              disabled={disabled || false}
              style={customStyle}
              {...field}
              innerRef={field.ref}
            >
              {list.map((item, index) => {
                return (
                  <MenuItem value={item.value} key={`${item.value}_${index}`}>
                    {item.shortWord ? item.shortWord : item.label}
                  </MenuItem>
                );
              })}
            </Select>
          );
        }}
      />
    </FormControl>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {},
}));

export default SelectForm;
