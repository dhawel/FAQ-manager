import * as React from "react";

import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
//Redux
import { deleteFaq } from "@/redux/slices/faqSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

interface ActionButtonProps {
  rowData: {
    index: number;
    _id: string;
    question: string;
    category: string;
    status: string;
  };
}

function ActionButton({ rowData }: ActionButtonProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleListItemClick(params: type) {}

  const handleDeleteClick = async () => {
    try {
      await dispatch(deleteFaq(rowData._id));
      handleClose();
    } catch (err) {
      console.error("Error deleting question:", err);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <IconButton onClick={handleClick} aria-label="Action">
        <MoreVertIcon />
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
              <ListItemAvatar>
                <VisibilityIcon sx={{ fontSize: 20 }} />
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{ fontSize: 12 }}
                primary="View"
              />
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
              <ListItemText
                primaryTypographyProps={{ fontSize: 12 }}
                primary="Deactivate"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton autoFocus onClick={() => handleDeleteClick()}>
              <ListItemAvatar>
                <DeleteOutlineIcon sx={{ fontSize: 20 }} />
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{ fontSize: 12 }}
                primary="Delete"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </>
  );
}

export default ActionButton;
