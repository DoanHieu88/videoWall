import React, { useContext } from "react";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import VideocamIcon from "@material-ui/icons/Videocam";
import { defaultData } from "./@type";
import { LiveView2Context } from "../../page/liveView2";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
  nested: {
    paddingLeft: 40,
  },
}));

const listLayout = Array.from(Array(4)).map((_, idx) => ({
  id: `${idx}_new`,
  name: `layout ${idx}`,
  userId: "user id người tạo",
  userNameShare: "tên người chia sẻ",
  grid: defaultData,
  countDuplicate: 0,
  idLayoutShare: "id layout Share",
  idLayoutDuplicate: "id layout Duplicate",
  createAt: "date",
  lastModified: "date",
  label: `layout ${idx}`,
}));

const ViewLayout = React.memo(() => {
  return (
    <React.Fragment>
      <List>
        {listLayout.map((it) => (
          <ItemLayout key={it.id} layout={it} />
        ))}
      </List>
    </React.Fragment>
  );
});

const ItemLayout = ({ layout }) => {
  const { setLayoutActive, setListLayoutActive } = useContext(LiveView2Context);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDoubleClick = (layoutLive) => {
    setLayoutActive(layoutLive);
    setListLayoutActive((prev) => {
      const tempData = [...prev];
      const layoutActive = tempData.findIndex((it) => it.id === layoutLive.id);

      if (layoutActive === -1) {
        tempData.push({ ...layoutLive });
      }
      return tempData;
    });
  };
  return (
    <React.Fragment>
      <ListItem>
        {open ? (
          <ArrowDropUpIcon
            style={{ fontSize: 40, cursor: "pointer" }}
            onClick={handleClick}
          />
        ) : (
          <ArrowDropDownIcon
            style={{ fontSize: 40, cursor: "pointer" }}
            onClick={handleClick}
          />
        )}

        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            cursor: "default",
          }}
          onDoubleClick={() => handleDoubleClick(layout)}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemIcon style={{ minWidth: 30 }}>
              <ViewComfyIcon />
            </ListItemIcon>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography style={{ fontSize: 14, fontWeight: "bold" }}>
                {layout.name}
              </Typography>
              <Typography
                style={{
                  fontSize: 10,
                  color: "#777",
                }}
              >
                chia sẻ bởi Hieu
              </Typography>
            </Box>
          </Box>
          <Typography
            style={{
              fontSize: 11,
              color: "#777",
            }}
          >
            {layout.grid.length} cameras
          </Typography>
        </Box>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {layout.grid &&
            layout.grid.map((grid) => (
              <React.Fragment key={grid.i}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon style={{ minWidth: 30 }}>
                    <VideocamIcon />
                  </ListItemIcon>
                  <ListItemText primary={grid.i} />
                </ListItem>
              </React.Fragment>
            ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default ViewLayout;
