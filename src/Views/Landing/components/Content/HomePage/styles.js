import { InputBase, Select, styled, TextField } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

export const StyledInput = styled(InputBase)(({ theme }) => ({
  width: "100%",
  height: "48px",
  borderRadius: "4px",
  backgroundColor: "#f7f9f7", // Light background color
  border: "1px solid #e2e8f0",
  paddingLeft: "12px",
  paddingRight: "12px",
  fontSize: "16px",
  display: "flex",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)", // Optional box-shadow for clean look
  "&:focus-within": {
    borderColor: "#86efac", // Green border on focus
  },
  "& .MuiSvgIcon-root": {
    color: "#4B5563", // Custom arrow color
  },
}));

export const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    textAlign: "start", // Align selected value to the start (left)
    paddingLeft: "7px", // Add padding to match the placeholder/input
  },
  "& .MuiSelect-icon": {
    top: "calc(50% - 12px)", // Vertically center the arrow
    right: "12px",
  },
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    width: "100%",
    height: "48px",
    borderRadius: "4px",
    backgroundColor: "#f7f9f7",
    border: "none",
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)",
    "&:focus-within": {
      borderColor: "#86efac", // Green focus border color
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e2e8f0", // Initial border color
    },
    "&:hover fieldset": {
      borderColor: "#e2e8f0", // Hover border color
    },
    "&.Mui-focused fieldset": {
      borderColor: "#86efac", // Green border color on focus
    },
  },
}));

export const IconComponent = KeyboardArrowDown;
