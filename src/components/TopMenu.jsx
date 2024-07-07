import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { Search } from "@mui/icons-material";

export const TopMenu = () => {
  const categories = [
    "Breaking",
    "India",
    "World Politics",
    "Opinion",
    "Featured",
    "Policy",
    "Diplomacy",
    "Elections",
    "Entertainment",
    "Cartoon Corner",
  ];
  return (
    <>
      <Box sx={{ bgcolor: "#1C1C1C", mt: 1, mx: -1, py: 0.5 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <IconButton>
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 5.3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {categories.map((item, key) => (
                <Box key={key}>
                  <Link
                    href="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Typography>{item}</Typography>
                  </Link>
                </Box>
              ))}
            </Box>
            <Box>
              <IconButton>
                <Search sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
