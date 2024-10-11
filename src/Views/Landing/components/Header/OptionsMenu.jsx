import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Divider, { dividerClasses } from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MuiMenuItem from "@mui/material/MenuItem";
import { paperClasses } from "@mui/material/Paper";
import { listClasses } from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon, { listItemIconClasses } from "@mui/material/ListItemIcon";
import { useTheme } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuButton from "./MenuButton";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../store/actions/authActions";

const MenuItem = styled(MuiMenuItem)({
  margin: "2px 0",
});

export default function OptionsMenu({ color = "black" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const token = useSelector((state) => state?.auth?.token);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout(token));
      dispatch({ type: "CLEAR_ITEM", payload: [] });
    } catch (error) {
      console.log("logout error", error);
    } finally {
      navigate("/login");
    }
  };

  return (
    <React.Fragment>
      <MenuButton
        aria-label="Open menu"
        onClick={handleClick}
        sx={{ borderColor: "transparent" }}
      >
        <KeyboardArrowDown style={{ color }} />
      </MenuButton>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: "4px",
          },
          [`& .${paperClasses.root}`]: {
            padding: 0,
          },
          [`& .${dividerClasses.root}`]: {
            margin: "4px -4px",
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            color: "black",
            fontFamily: "Poppins",
            fontSize: { xs: "12px", md: "15px", lg: "16px" },
          }}
        >
          Profile Settings
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/account-setting")}
          sx={{
            color: "black",
            fontFamily: "Poppins",
            fontSize: { xs: "12px", md: "15px", lg: "16px" },
          }}
        >
          Account Settings
        </MenuItem>

        <Divider />
        <MenuItem
          onClick={handleLogout}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: "auto",
              minWidth: 0,
            },
          }}
        >
          <ListItemText
            sx={{
              color: theme.palette.custom.deleteHover,
              fontFamily: "Poppins",
              fontSize: { xs: "12px", md: "15px", lg: "16px" },
            }}
          >
            Logout
          </ListItemText>
          <ListItemIcon sx={{ color: theme.palette.custom.deleteHover }}>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
