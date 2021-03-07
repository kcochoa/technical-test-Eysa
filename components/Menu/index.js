import {useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from '@material-ui/icons/Person';
import styles from "../Menu/Menu.module.scss"

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #FC9543",
    backgroundColor: "#032336",
    color: 'white'
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}

    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#FC9543",
      color: theme.palette.common.white,
      },
    },
  })
  )(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        className={styles.buttonStyle}
        onClick={handleClick}
      >
       <PersonIcon fontSize="large"/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="Account Detail" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Settings" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
      </>
  );
}
