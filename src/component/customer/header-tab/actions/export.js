import { useState } from "react";

import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
  withStyles,
} from "@material-ui/core";

import { OpenDropIcon } from "../../../../common/icons/OpenDropIcon";
import { DropdownIcon } from "../../../../common/icons/DropdownIcon";

import { fileList } from "../../../../utils/common";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    style={{
      top: "10px",
      padding: "8px 7px 8xp 7px",
    }}
    {...props}
  />
));

export const useStylesSelectTab = makeStyles({
  root: {
    "& .MuiDialog-paper": {
      overflowY: "hidden",
    },
  },
  btnDropdown: {
    padding: "14px 16px 13px",
    borderRadius: "4px",
    width: "150px",
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textTransform: "capitalize",
    cursor: "pointer",
    "& p": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      fontSize: "16px",
      fontWeight: "bold",
      textOverflow: "ellipsis",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
    },
  },
  listItem: {
    padding: "10px 20px 10px 20px",
    lineHeight: "18.4px",
    color: "#000000",
    cursor: "pointer",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#fff1f2",
    },
  },
});

const ExportButton = () => {
  const classes = useStylesSelectTab();

  const [fileImport, setFileImport] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box fullWidth>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="outlined"
        size="medium"
        className={classes.btnDropdown}
        endIcon={Boolean(anchorEl) ? <OpenDropIcon /> : <DropdownIcon />}
        fullWidth
        onClick={handleClick}
      >
        <Typography>Export Data</Typography>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box
          style={{
            width: "125px",
          }}
        >
          {fileList.map((file) => (
            <MenuItem
              key={file.value}
              component="div"
              className={classes.listItem}
              style={{
                fontWeight: fileImport === file.name ? 500 : 400,
                backgroundColor:
                  fileImport === file.value
                    ? "rgba(255, 160, 169, 0.15)"
                    : "transparent",
              }}
              onClick={() => setFileImport(file.value)}
            >
              <Typography>{file.name}</Typography>
            </MenuItem>
          ))}
        </Box>
      </StyledMenu>
    </Box>
  );
};

export default ExportButton;
