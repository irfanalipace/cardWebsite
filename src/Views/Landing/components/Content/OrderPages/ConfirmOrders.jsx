// import React, { useState } from "react";
// import { Box, Tabs, Tab, Typography, LinearProgress, useMediaQuery } from "@mui/material";
// import { styled, useTheme } from "@mui/material/styles";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import HeaderOrderSections from "../../Header/HeaderOrderSections";
// import ConfirmOrderCards from "./ConfirmOrderCards";
// import Footer from "../../Footer";
// import PayOrder from "./PayOrder";
// import RecviedOrder from "./RecviedOrder";

// const StyledTab = styled(Tab)(({ theme, selected, completed }) => ({
//   minWidth: 100,
//   height: 50,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   textTransform: "none",
//   "& .tab-container": {
//     display: "flex",
//     alignItems: "center",
//   },
//   "& .tab-number": {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: 30,
//     height: 30,
//     borderRadius: "50%",
//     backgroundColor: completed ? "#8AE700" : selected ? "#8AE700" : "#f0f0f0",
//     color: completed ? "#fff" : selected ? "#fff" : "#000",
//     fontWeight: "bold",
//     fontSize: "1.2rem",
//     marginRight: theme.spacing(1),
//   },
//   "& .tab-label": {
//     color: completed ? "#8AE700" : selected ? "#8AE700" : "#000",
//     fontSize: "1rem",
//     fontWeight: selected || completed ? "bold" : "normal",
//   },
// }));

// const ConfirmOrders = () => {

//   const [currentStep, setCurrentStep] = useState(1);
  
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const handleChange = (event, newValue) => {
//     setCurrentStep(newValue);
//   };

//   const progress = (currentStep / 3) * 100;

//   return (
//     <Box>
//       <Box sx={{ margin: isMobile ? "80px 10px" : "143px" }}>
//         <HeaderOrderSections />
//         <Box
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           mt={isMobile ? 2 : 5}
//         >
//           <Tabs
//             value={currentStep}
//             onChange={handleChange}
//             indicatorColor="none"
//             centered
//             orientation={isMobile ? "vertical" : "horizontal"}
//           >
//             <StyledTab
//               selected={currentStep === 0}
//               completed={currentStep > 0}
//               label={
//                 <div className="tab-container">
//                   <div className="tab-number">
//                     {currentStep > 0 ? <CheckCircleOutlineIcon /> : "1"}
//                   </div>
//                   <div className="tab-label">Select</div>
//                 </div>
//               }
//             />
//             <StyledTab
//               selected={currentStep === 1}
//               completed={currentStep > 1}
//               label={
//                 <div className="tab-container">
//                   <div className="tab-number">
//                     {currentStep > 1 ? <CheckCircleOutlineIcon /> : "2"}
//                   </div>
//                   <div className="tab-label">Confirm</div>
//                 </div>
//               }
//             />
//             <StyledTab
//               selected={currentStep === 2}
//               completed={currentStep > 2}
//               label={
//                 <div className="tab-container">
//                   <div className="tab-number">
//                     {currentStep > 2 ? <CheckCircleOutlineIcon /> : "3"}
//                   </div>
//                   <div className="tab-label">Pay</div>
//                 </div>
//               }
//             />
//             <StyledTab
//               selected={currentStep === 3}
//               completed={currentStep >= 3}
//               label={
//                 <div className="tab-container">
//                   <div className="tab-number">
//                     {currentStep >= 3 ? <CheckCircleOutlineIcon /> : "4"}
//                   </div>
//                   <div className="tab-label">Received</div>
//                 </div>
//               }
//             />
//           </Tabs>

//           <Box width={isMobile ? "90%" : "45%"} mt={2}>
//             <LinearProgress
//               variant="determinate"
//               value={progress}
//               sx={{
//                 height: 5,
//                 backgroundColor: "#d0d0d0",
//                 "& .MuiLinearProgress-bar": { backgroundColor: "#8AE700" },
//               }}
//             />
//           </Box>

//           <Box mt={isMobile ? 3 : 5} sx={{ maxWidth: "none" }}>
//             {currentStep === 0 && <Typography>Select Items</Typography>}
//             {currentStep === 1 && (
//               <Box>
//                 <ConfirmOrderCards />
//               </Box>
//             )}
//             {currentStep === 2 && (
//               <Box>
//                 <PayOrder />
//               </Box>
//             )}
//             {currentStep === 3 && (
//               <Box>
//                 <RecviedOrder />
//               </Box>
//             )}
//           </Box>
//         </Box>
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default ConfirmOrders;


import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, LinearProgress, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HeaderOrderSections from "../../Header/HeaderOrderSections";
import ConfirmOrderCards from "./ConfirmOrderCards";
import Footer from "../../Footer";
import PayOrder from "./PayOrder";
import RecviedOrder from "./RecviedOrder";

const StyledTab = styled(Tab)(({ theme, selected, completed }) => ({
  minWidth: 100,
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "none",
  "& .tab-container": {
    display: "flex",
    alignItems: "center",
  },
  "& .tab-number": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: completed ? "#8AE700" : selected ? "#8AE700" : "#f0f0f0",
    color: completed ? "#fff" : selected ? "#fff" : "#000",
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginRight: theme.spacing(1),
  },
  "& .tab-label": {
    color: completed ? "#8AE700" : selected ? "#8AE700" : "#000",
    fontSize: "1rem",
    fontWeight: selected || completed ? "bold" : "normal",
  },
}));

const ConfirmOrders = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setCurrentStep(newValue);
  };

  const handleNextTab = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const progress = (currentStep / 3) * 100;

  return (
    <Box>
      <Box sx={{ margin: isMobile ? "80px 10px" : "143px" }}>
        <HeaderOrderSections />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={isMobile ? 2 : 5}
        >
          <Tabs
            value={currentStep}
            onChange={handleChange}
            indicatorColor="none"
            centered
            orientation={isMobile ? "vertical" : "horizontal"}
          >
            <StyledTab
              selected={currentStep === 0}
              completed={currentStep > 0}
              label={
                <div className="tab-container">
                  <div className="tab-number">
                    {currentStep > 0 ? <CheckCircleOutlineIcon /> : "1"}
                  </div>
                  <div className="tab-label">Select</div>
                </div>
              }
            />
            <StyledTab
              selected={currentStep === 1}
              completed={currentStep > 1}
              label={
                <div className="tab-container">
                  <div className="tab-number">
                    {currentStep > 1 ? <CheckCircleOutlineIcon /> : "2"}
                  </div>
                  <div className="tab-label">Confirm</div>
                </div>
              }
            />
            <StyledTab
              selected={currentStep === 2}
              completed={currentStep > 2}
              label={
                <div className="tab-container">
                  <div className="tab-number">
                    {currentStep > 2 ? <CheckCircleOutlineIcon /> : "3"}
                  </div>
                  <div className="tab-label">Pay</div>
                </div>
              }
            />
            <StyledTab
              selected={currentStep === 3}
              completed={currentStep >= 3}
              label={
                <div className="tab-container">
                  <div className="tab-number">
                    {currentStep >= 3 ? <CheckCircleOutlineIcon /> : "4"}
                  </div>
                  <div className="tab-label">Received</div>
                </div>
              }
            />
          </Tabs>

          <Box width={isMobile ? "90%" : "45%"} mt={2}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 5,
                backgroundColor: "#d0d0d0",
                "& .MuiLinearProgress-bar": { backgroundColor: "#8AE700" },
              }}
            />
          </Box>

          <Box mt={isMobile ? 3 : 5} sx={{ maxWidth: "none" }}>
            {currentStep === 0 && <Typography>Select Items</Typography>}
            {currentStep === 1 && (
              <Box>
                <ConfirmOrderCards onPayWithBtc={handleNextTab} />
              </Box>
            )}
            {currentStep === 2 && (
              <Box>
                <PayOrder onPayWithBtc={handleNextTab}/>
              </Box>
            )}
            {currentStep === 3 && (
              <Box>
                <RecviedOrder />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ConfirmOrders;
