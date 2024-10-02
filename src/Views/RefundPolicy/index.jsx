import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const RefundPolicy = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };
  return (
    <Stack direction={"column"} sx={{ px: 6, py: 5, gap: 5 }}>
      <Typography
        sx={{
          fontSize: { xs: "10px", md: "16px" },
          fontWeight: 500,
          color: theme.palette.custom.refundPolicyText,
        }}
      >
        At Spracht, we value your satisfaction and want to ensure that every
        purchase you make with us is a positive experience. We understand that
        sometimes, a return or exchange may be necessary, and we are here to
        assist you through the process. This page provides you with all the
        essential information you need to know about our return policy,
        including eligibility, timeframes, and steps to initiate a return.
        Please take a moment to familiarize yourself with our policy to ensure a
        smooth return process.
      </Typography>

      <Accordion
        onChange={handleAccordionChange}
        sx={{
          backgroundColor: theme.palette.custom.RefundPolicyAccordion,
          mb: 2.5,
          boxShadow: "none",

          "&:before": {
            display: "none", // Remove default shadow line above accordion
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <RemoveIcon
                sx={{
                  color: "#fff",
                  fontSize: "28px",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  p: 0.3,
                }}
              />
            ) : (
              <AddIcon
                sx={{
                  color: "#fff",
                  fontSize: "28px",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  p: 0.3,
                }}
              />
            )
          }
          sx={{
            "& .MuiAccordionSummary-content": {
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              fontSize: "16px",
              fontFamily: "poppins",
              color: theme.palette.custom.white,
            }}
          >
            Return Policy
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#fff", pt: 3 }}>
          <Typography
            component={"Box"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              fontFamily: "poppins",
              fontWeight: 500,
              color: theme.palette.custom.refundPolicyText,
            }}
          >
            <Typography
              component={"span"}
              fontSize={{ xs: "10px", md: "15px" }}
            >
              1. Refund requests must be made within 14 days of delivery date.
              After 14 days from delivery date you must contact Spracht Customer
              Service to determine the best course of action. Spracht will not
              issue refunds for products purchased through other entities, such
              as distributors or retail partners. Defective units are covered
              under Spracht’s one year limited warranty policy will be replaced
              at Spracht’s cost. See “Returning Products Under Warranty,” below,
              for information on warranty returns.
            </Typography>
            <Typography
              component={"span"}
              fontSize={{ xs: "10px", md: "15px" }}
            >
              2. A copy of the Spracht credit card purchase receipt, and a copy
              of the original Spracht invoice may be requested prior to Spracht
              Customer Service issuing a Return Authorization.
            </Typography>
            <Typography
              component={"span"}
              fontSize={{ xs: "10px", md: "15px" }}
            >
              3. Unit must be in like-new condition and returned in original
              packaging with all original accessories, literature and other
              components. Spracht reserves the right to reject any refund
              request if the product is received damaged or if any accessories,
              literature or other original components are missing.
            </Typography>
            <Typography
              component={"Box"}
              sx={{ display: "flex", flexDirection: "column" }}
              fontSize={{ xs: "10px", md: "15px" }}
            >
              4. A Return Authorization (RA) number must be obtained prior to
              returning the product; to request an RA number, please email or
              call 833-SPRACHT (833-777-2248), and provide the following
              information:
              <Typography
                component={"span"}
                fontSize={{ xs: "10px", md: "15px" }}
              >
                Name
              </Typography>
              <Typography
                component={"span"}
                fontSize={{ xs: "10px", md: "15px" }}
              >
                Address
              </Typography>{" "}
              <Typography
                component={"span"}
                fontSize={{ xs: "10px", md: "15px" }}
              >
                Phone
              </Typography>{" "}
              <Typography
                component={"span"}
                fontSize={{ xs: "10px", md: "15px" }}
              >
                Reason
              </Typography>{" "}
              <Typography
                component={"span"}
                fontSize={{ xs: "10px", md: "15px" }}
              >
                {" "}
                for Return Date of Purchase Unit Serial Number
              </Typography>
            </Typography>
            <Typography
              component={"span"}
              fontSize={{ xs: "10px", md: "15px" }}
            >
              5. You will be issued an RA# and instructions on how to return
              your product to the appropriate Spracht location.
            </Typography>
            <Typography
              component={"span"}
              fontSize={{ xs: "10px", md: "15px" }}
            >
              6. Please mark with the RA number on the outside of the package.
            </Typography>
            <Typography
              component={"span"}
              fontSize={{ xs: "10px", md: "15px" }}
            >
              7. A copy of the Spracht credit card purchase receipt, and a copy
              of the original Spracht invoice, should be placed inside the
              return package so that it is easily visible.
            </Typography>
            <Typography
              component={"span"}
              fontSize={{ xs: "10px", md: "15px" }}
            >
              8. Products received without an RA number and the required
              documentation as specified above may not be accepted or processed
              for return.
            </Typography>

            <Typography
              component={"span"}
              fontSize={{ xs: "10px", md: "15px" }}
            >
              9. Products received that do not meet the above return criteria
              may be returned to the customer via ground shipment.
            </Typography>
            <Typography
              component={"span"}
              fontSize={{ xs: "10px", md: "15px" }}
            >
              10. You may be responsible for shipping costs for returning the
              product to Spracht’s warehouse. Product should be shipped so that
              it can be tracked and/or insured; Spracht is not responsible for
              products lost or damaged during return shipment.
            </Typography>
            <Typography
              component={"span"}
              fontSize={{ xs: "10px", md: "15px" }}
            >
              11. Returns may be subjected to a 10% restocking fee. Shipping
              charges may be nonrefundable.
            </Typography>
            <Typography
              component={"span"}
              fontSize={{ xs: "10px", md: "15px" }}
            >
              12. Funds will be credited within 7-10 business days of receipt of
              returned product pending qualification and subject to above
              criteria.
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default RefundPolicy;
