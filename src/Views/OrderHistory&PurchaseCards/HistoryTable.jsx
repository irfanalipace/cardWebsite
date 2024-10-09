import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, useTheme, CircularProgress } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { fetchOrders } from "../../store/actions/orderActions";
import { useEffect, useState } from "react";

export default function HistoryTable() {
  const [orders, setOrders] = useState();
  const theme = useTheme();
  const [loader, setLoader] = useState(false);

  const getAllOrders = async () => {
    try {
      setLoader(true);
      const { success, data } = await fetchOrders();

      if (success) {
        setOrders(data);
      }
      setLoader(false);
    } catch (err) {
      console.log(err.errors[0].message || "Failed to fetch orders");
      setLoader(false);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return loader ? (
    <CircularProgress size={34} sx={{ color: "8AE700" }} />
  ) : (
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
              Payment Method
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontFamily: "Poppins", padding: { xs: "8px", md: "16px" } }}
            >
              User
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontFamily: "Poppins", padding: { xs: "8px", md: "16px" } }}
            >
              Status
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontFamily: "Poppins", padding: { xs: "8px", md: "16px" } }}
            >
              Total Price
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
          {orders?.map((order) => (
            <TableRow
              key={order.id}
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
                {order?.payment_method}
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
                {order?.user?.email}
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
                {order?.order_status}
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
                {order?.total_price}
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
