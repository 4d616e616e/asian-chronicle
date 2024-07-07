import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { InfoHeader } from "./InfoHeader";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#000", height: "154px", m: -1 }}>
        <InfoHeader />
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "90px",
                width: "420px",
              }}
            >
              <Image
                src="/logo.svg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: 0,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box>
                <Typography sx={{ color: "#fff" }}>Newsletter</Typography>
              </Box>
              <Box>
                <Button
                  sx={{
                    border: "2px solid white",
                    bgcolor: "white",
                    color: "#000",
                    borderRadius: "10px",
                    fontWeight: "bolder",
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
