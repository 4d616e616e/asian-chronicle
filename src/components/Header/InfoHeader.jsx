import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export const InfoHeader = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
            <Link
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                borderTop: "4px solid white",
              }}
            >
              <Typography>About</Typography>
            </Link>
            <Link
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                borderTop: "4px solid white",
              }}
            >
              <Typography>Whats's Trending</Typography>
            </Link>
          </Box>
          <Box sx={{ borderTop: "4px solid white" }}>
            <Link
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <Typography>info@theasianchronicle.com</Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};
