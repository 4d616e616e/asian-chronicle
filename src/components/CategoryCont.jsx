import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export const CategoryCont = () => {
  return (
    <>
      <Box>
        <Container maxWidth="xl" sx={{ my: 5 }}>
          <Box container sx={{ border: "1px solid #B3B3B3", p: 2 }}>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 0.5,
                fontWeight: "bolder",
                fontSize: "18px",
              }}
            >
              <Box
                sx={{
                  border: "4px solid #2F8FFA",
                  height: "8px",
                  width: "8px",
                  borderRadius: "50%",
                }}
              ></Box>
              OPINIONS
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 1.5,
              }}
            >
              {Array.from(Array(4)).map((item, key) => (
                <Card
                  key={key}
                  sx={{ width: "100%", border: "none", borderRadius: "0px" }}
                  variant="outlined"
                >
                  <CardContent
                    sx={{
                      padding: 0,
                      "&:last-child": {
                        paddingBottom: 0,
                      },
                    }}
                  >
                    <Stack>
                      <Box
                        sx={{
                          position: "relative",
                          overflow: "hidden",
                          height: "241px",
                          width: "100%",
                        }}
                      >
                        <Image
                          src="/trump.png"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </Box>
                      <Box sx={{ bgcolor: "#F0F9FF", height: "256px", p: 1 }}>
                        <Typography
                          fontSize="10px"
                          textAlign="center"
                          sx={{ color: "#3090FA", my: 2 }}
                        >
                          USA ELECTIONS
                        </Typography>
                        <Typography
                          textAlign="center"
                          fontWeight="bolder"
                          sx={{ my: 2 }}
                        >
                          It’s Not Too Late to Replace Biden and Defeat Trump
                        </Typography>
                        <Typography
                          textAlign="center"
                          fontSize="13px"
                          sx={{ color: "#929292" }}
                        >
                          A former White House counsel and prominent Democrat
                          explains how to do it
                        </Typography>
                        <Typography
                          textAlign="center"
                          sx={{ color: "#929292", my: 2 }}
                        >
                          By Aastha Prajwal
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
