import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const TopSection = () => {
  const news = [
    "Biden speaks with Netanyahu as Israel and Hamas move closer to cease-fire",
    "US lending support to help fend off cyber, disinformation attacks on Paris Olympics",
    "Biden speaks with Netanyahu as Israel and Hamas move closer to cease-fire",
    "US lending support to help fend off cyber, disinformation attacks on Paris Olympics",
    "Biden speaks with Netanyahu as Israel and Hamas move closer to cease-fire",
    "Biden speaks with Netanyahu as Israel and Hamas move closer to cease-fire",
  ];
  return (
    <>
      <Box>
        <Container maxWidth="xl" sx={{ my: 5 }}>
          <Box>
            <Grid container sx={{ border: "1px solid #B3B3B3" }}>
              <Grid item md={6} sx={{ borderRight: "1px solid #B3B3B3" }}>
                <Box sx={{ p: 2 }}>
                  <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                    <Box
                      sx={{
                        height: "10px",
                        width: "10px",
                        border: "4px solid #AD00FF",
                        borderRadius: "50%",
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        borderRight: "3px solid #000",
                        py: 0,
                        pl: 0,
                        pr: 1,
                        fontWeight: "bolder",
                      }}
                    >
                      ELECTION 2024
                    </Typography>
                    <Typography sx={{ color: "#AD00FF", fontWeight: "bolder" }}>
                      POLITICS
                    </Typography>
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        height: "518px",
                        width: "100%",
                      }}
                    >
                      <Image
                        src="/Donald.png"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      fontSize="30px"
                      fontWeight="bolder"
                      lineHeight="36px"
                    >
                      Trump campaign blocks pair of anti-abortion activists from
                      RNC platform committee
                    </Typography>
                    <Typography sx={{ color: "#888888" }} fontSize="16px">
                      The shakeup, which has not been previously reported, comes
                      as anti-abortion groups petition Trump, his campaign
                      advisers and members of the RNC not to make significant
                      changes to the party’s platform.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={4} sx={{ borderRight: "1px solid #B3B3B3" }}>
                <Box sx={{ p: 2 }}>
                  <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                    <Box
                      sx={{
                        height: "10px",
                        width: "10px",
                        border: "4px solid #FF0000",
                        borderRadius: "50%",
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        fontWeight: "bolder",
                        color: "#FF0000",
                      }}
                    >
                      LIVE
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      fontSize="28px"
                      fontWeight="bolder"
                      lineHeight="36px"
                    >
                      Biden hosts holiday events after pledging to regain
                      footing
                    </Typography>
                  </Box>
                  <Box sx={{ my: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          border: "2px solid #FF0000",
                          height: "5px",
                          width: "5px ",
                          bgcolor: "#FF0000",
                          borderRadius: "50%",
                        }}
                      ></Box>
                      <Typography sx={{ color: "#595959" }}>
                        4:08 p.m.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        height: "50px",
                        overflow: "hidden",
                        pl: 0.4,
                        gap: 1.2,
                      }}
                    >
                      <Box
                        sx={{ border: "0.5px solid #595959", height: "100px" }}
                      ></Box>
                      <Link
                        href=""
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            "&:hover": { textDecoration: "underline" },
                            fontWeight: "bolder",
                          }}
                        >
                          Biden, Netanyahu discuss possible meeting this month,
                          administration official says
                        </Typography>
                      </Link>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          border: "2px solid #FF0000",
                          height: "5px",
                          width: "5px ",
                          bgcolor: "#FF0000",
                          borderRadius: "50%",
                        }}
                      ></Box>
                      <Typography sx={{ color: "#595959" }}>
                        4:08 p.m.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        height: "50px",
                        overflow: "hidden",
                        pl: 0.4,
                        gap: 1.2,
                      }}
                    >
                      <Box
                        sx={{ border: "0.5px solid #595959", height: "100px" }}
                      ></Box>
                      <Link
                        href=""
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            "&:hover": { textDecoration: "underline" },
                            fontWeight: "bolder",
                          }}
                        >
                          Biden, Netanyahu discuss possible meeting this month,
                          administration official says
                        </Typography>
                      </Link>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          border: "2px solid #FF0000",
                          height: "5px",
                          width: "5px ",
                          bgcolor: "#FF0000",
                          borderRadius: "50%",
                        }}
                      ></Box>
                      <Typography sx={{ color: "#595959" }}>
                        4:08 p.m.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        height: "50px",
                        overflow: "hidden",
                        pl: 2,
                        gap: 1.2,
                      }}
                    >
                      <Link
                        href=""
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            "&:hover": { textDecoration: "underline" },
                            fontWeight: "bolder",
                          }}
                        >
                          Biden, Netanyahu discuss possible meeting this month,
                          administration official says
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                  <Box sx={{ my: 1 }}>
                    <Grid
                      container
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Grid item md={5.5}>
                        <Box
                          sx={{
                            position: "relative",
                            overflow: "hidden",
                            width: "100%",
                            height: "170px",
                          }}
                        >
                          <Image
                            src="/biden.png"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                          />
                        </Box>
                      </Grid>
                      <Grid item md={6.2}>
                        <Box>
                          <Typography
                            fontSize="20px"
                            fontWeight="bolder"
                            lineHeight="26px"
                            sx={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: "3",
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            Biden’s omnipresent accessory, even in your living
                            room: A teleprompter
                          </Typography>
                          <Typography
                            fontSize="12px"
                            sx={{ color: "#505050", my: 0.5 }}
                          >
                            The teleprompter is a common device for politicians.
                            But Biden’s use of it even in small settings has
                            prompted frustration among some supporters.
                          </Typography>
                          <Typography fontSize="10px">
                            By Matt Viser, Tyler Pager and Josh Dawsey
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      my: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Card variant="outlined">
                      <CardContent
                        sx={{
                          padding: 1,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          "&:last-child": {
                            paddingBottom: 1,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            overflow: "hidden",
                            position: "relative",
                            height: "50px",
                            width: "50px",
                          }}
                        >
                          <Image
                            src="/bidenOne.png"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                          />
                        </Box>
                        <Box sx={{ width: "85%" }}>
                          <Typography fontSize="13px">
                            ALSO IN THE NEWS
                          </Typography>
                          <Typography
                            fontSize="13px"
                            lineHeight="15px"
                            fontWeight="bolder"
                          >
                            Biden speaks with Netanyahu as Israel and Hamas move
                            closer to cease-fire
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                    <Card variant="outlined">
                      <CardContent
                        sx={{
                          padding: 1,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          "&: last-child": {
                            paddingBottom: 1,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            overflow: "hidden",
                            position: "relative",
                            height: "50px",
                            width: "50px",
                          }}
                        >
                          <Image
                            src="/bidenTwo.png"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                          />
                        </Box>
                        <Box sx={{ width: "85%" }}>
                          <Typography fontSize="13px">
                            ALSO IN THE NEWS
                          </Typography>
                          <Typography
                            fontSize="13px"
                            lineHeight="15px"
                            fontWeight="bolder"
                          >
                            Biden speaks with Netanyahu as Israel and Hamas move
                            closer to cease-fire
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                    <Card variant="outlined">
                      <CardContent
                        sx={{
                          padding: 1,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          "&: last-child": {
                            paddingBottom: 1,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            overflow: "hidden",
                            position: "relative",
                            height: "50px",
                            width: "50px",
                          }}
                        >
                          <Image
                            src="/bidenTwo.png"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                          />
                        </Box>
                        <Box sx={{ width: "85%" }}>
                          <Typography fontSize="13px">
                            ALSO IN THE NEWS
                          </Typography>
                          <Typography
                            fontSize="13px"
                            lineHeight="15px"
                            fontWeight="bolder"
                          >
                            Biden speaks with Netanyahu as Israel and Hamas move
                            closer to cease-fire
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={2}>
                <Box sx={{ p: 2 }}>
                  {" "}
                  <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                    <Box
                      sx={{
                        height: "10px",
                        width: "10px",
                        border: "4px solid #FF4C00",
                        borderRadius: "50%",
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        fontWeight: "bolder",
                      }}
                    >
                      TOP PICKS
                    </Typography>
                  </Box>
                  <Box>
                    {news.map((item, key) => (
                      <Link
                        key={key}
                        style={{ color: "#000", textDecoration: "none" }}
                        href="/"
                      >
                        <Typography
                          sx={{
                            borderBottom: "1px solid grey",
                            py: 2,
                            wordSpacing: "-1px",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                          fontWeight="bolder"
                          lineHeight="1.3"
                        >
                          {item}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
