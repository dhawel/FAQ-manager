import * as React from "react";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import ActionPopoverButton from "../ActionPopoverButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function ActionButton(props) {
  // console.log("orooo", props.rowData);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleListItemClick(params: type) {
    console.log("foo");
  }
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <IconButton onClick={handleClick} aria-label="Action">
        <FontAwesomeIcon icon={faEllipsisV} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}

      >
        <List>
          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick("addAccount")}
            >
              <ListItemAvatar  >
                <VisibilityIcon  sx={{ fontSize: 20 }}/>
              </ListItemAvatar>
              <ListItemText  primaryTypographyProps={{ fontSize: 12 }} primary="View" />
            </ListItemButton>
          </ListItem>

          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick("addAccount")}
            >
              <ListItemAvatar>
                <CheckCircleOutlineIcon sx={{ fontSize: 20 }} />
              </ListItemAvatar>
              <ListItemText primaryTypographyProps={{ fontSize: 12 }} primary="Deactivate" />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick("addAccount")}
            >
              <ListItemAvatar>
                <DeleteOutlineIcon sx={{ fontSize: 20 }} />
              </ListItemAvatar>
              <ListItemText primaryTypographyProps={{ fontSize: 12 }}  primary="Delete" />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </>
  );
}

export default ActionButton;