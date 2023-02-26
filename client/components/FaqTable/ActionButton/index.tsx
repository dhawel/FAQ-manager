import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ActionBox from "../ActionBox";
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@mui/material/IconButton';
function ActionButton(props) {
  // console.log("orooo", props.rowData);
function onbtnclick(){
  console.log("action btn", props.rowData.question);
}
  return (
    <>
      <IconButton onClick={onbtnclick} aria-label="Action">
        <FontAwesomeIcon icon={faEllipsisV} />
      </IconButton>
      <ActionBox />
    </>
  );
}

export default ActionButton;
