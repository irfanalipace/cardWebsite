import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, useTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function createData(name, date, cards, price) {
  return { name, date, cards, price };
}

const rows = [
  createData("12-09-2023", "12-09-2023", "2 Cards", "$300"),
  createData("12-09-2023", "12-09-2023", "2 Cards", "$300"),
  createData("12-09-2023", "12-09-2023", "2 Cards", "$300"),
  createData("12-09-2023", "12-09-2023", "2 Cards", "$300"),
  createData("12-09-2023", "12-09-2023", "2 Cards", "$300"),
  createData("12-09-2023", "12-09-2023", "2 Cards", "$300"),
  createData("12-09-2023", "12-09-2023", "2 Cards", "$300"),
  createData("12-09-2023", "12-09-2023", "2 Cards", "$300"),
  createData("12-09-2023", "12-09-2023", "2 Cards", "$300"),
  createData("12-09-2023", "12-09-2023", "2 Cards", "$300"),
];

export default function HistoryTable() {
  const theme = useTheme();
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        overflowX: "auto", // Enable horizontal scrolling
      }}
    >
      <Table
        sx={{
          fontFamily: "Poppins", // Set Poppins font family for the entire table
          minWidth: 650, // Minimum width to maintain table structure
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: theme.palette.custom.subscribeOfferBackground,
              fontWeight: 600,
              fontSize: { xs: "12px", md: "14px" }, // Adjust font size for smaller screens
            }}
          >
            <TableCell
              sx={{ fontFamily: "Poppins", padding: { xs: "8px", md: "16px" } }}
            >
              Card Name
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontFamily: "Poppins", padding: { xs: "8px", md: "16px" } }}
            >
              Card Purchase Date
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontFamily: "Poppins", padding: { xs: "8px", md: "16px" } }}
            >
              How many Cards
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontFamily: "Poppins", padding: { xs: "8px", md: "16px" } }}
            >
              Price
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontFamily: "Poppins", padding: { xs: "8px", md: "16px" } }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{ backgroundColor: theme.palette.custom.tableBodyBackground }}
        >
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                fontFamily: "Poppins", // Set Poppins font family for each row
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  color: theme.palette.custom.tableCellText,
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: { xs: "12px", md: "14px" }, // Responsive font size
                  padding: { xs: "8px", md: "16px" }, // Responsive padding
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: theme.palette.custom.tableCellText,
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: { xs: "12px", md: "14px" }, // Responsive font size
                  padding: { xs: "8px", md: "16px" }, // Responsive padding
                }}
              >
                {row.date}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: theme.palette.custom.tableCellText,
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: { xs: "12px", md: "14px" }, // Responsive font size
                  padding: { xs: "8px", md: "16px" }, // Responsive padding
                }}
              >
                {row.cards}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: theme.palette.custom.tableCellText,
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: { xs: "12px", md: "14px" }, // Responsive font size
                  padding: { xs: "8px", md: "16px" }, // Responsive padding
                }}
              >
                {row.price}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: theme.palette.custom.tableCellText,
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: { xs: "12px", md: "14px" }, // Responsive font size
                  padding: { xs: "8px", md: "16px" }, // Responsive padding
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<DeleteOutlineIcon />} // Add the delete icon at the start
                  sx={{
                    backgroundColor: theme.palette.custom.delete, // Set the background color to red
                    color: theme.palette.custom.white, // Set the text color to white
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: theme.palette.custom.deleteHover, // Change color on hover
                    },
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
