import { Box, Button } from "@mui/material";
import React from "react";

export const GetPay = () => {
  return (
    <Box sx={{pt:"200px", pb:"50px"}}>

    <Box className="getpay" sx={{ display: "relative", height: "100vh" }}>
      <Box>
        <Box sx={{}}>
          <Box sx={{ position: "absolute", left:{xs:"-4%", md:120}, width:{xs:"300px", md:500}, height:{xs:"300px", md:450}}}>
            <img
              src="https://wickret.cuberto.com/assets/img/figure/1/3@2x.png"
              /* puntos */
              alt="icon"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box sx={{ position: "absolute", left:{xs:"-4%", md:120}, width:{xs:"300px", md:500}, height:{xs:"300px", md:450}}}>
            <img
              src="https://wickret.cuberto.com/assets/img/figure/1/1@2x.png"
              /* nube */
              alt="icon"
              width={"100%"}
              height={"100%"}
            />
          </Box>{" "}
          <Box sx={{ ml: 10, position: "absolute", left:{xs:"-4%", md:120}, width:{xs:"300px", md:500}, height:{xs:"300px", md:450}}}>
            <img
              /* tipito */
              src="https://wickret.cuberto.com/assets/img/figure/1/2@2x.png"
              alt="icon"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "300px",
          position: "absolute",
          right:{xs:"14%", md: "300px"},
          mt:{xs:"400px", md:"100px"},
        }}
      >
        <Box sx={{ mb: 2 }}>
          <h3>Get Paid early</h3>
        </Box>
        <h4>
          Your paycheck will be automatically deposited up to two days early
        </h4>
        <Box
          sx={{ mt: 3, display: "flex", mx: "auto", justifyContent: "center" }}
        >
          <Button variant="outlined">Download</Button>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};
