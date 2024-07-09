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

export const PostPAge = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          textAlign="center"
          fontSize="22px"
          fontWeight="bolder"
          sx={{ color: "#FF0000", mt: 5 }}
        >
          USA ELECTIONS
        </Typography>
        <Typography
          textAlign="center"
          fontSize="80px"
          fontWeight="bolder"
          lineHeight="80px"
          my={2}
        >
          It’s Not Too Late to Replace Biden and Defeat Trump
        </Typography>
        <Typography
          textAlign="center"
          fontSize="20px"
          fontWeight="bold"
          sx={{ color: "#0043EF", my: 2 }}
        >
          Opinion by Aastha Prajwal | JULY 05, 2024
        </Typography>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "700px",
            width: "100%",
            my: 2,
          }}
        >
          <Image
            src="/trump.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center
          "
          />
        </Box>
        <Typography fontSize="25px">
          President Joe Biden’s campaign is concocting many phony reasons why he
          must stay in the race for Democrats to have any hope of defeating
          Donald Trump in November. Perhaps the most prominent are the notions
          that replacing Biden is impossible or would invite chaos at the
          convention and lead to Trump’s victory.
        </Typography>
        <Typography fontSize="25px" sx={{ my: 2 }}>
          As a veteran of multiple Democratic conventions over the years and as
          President Barack Obama’s former White House counsel, I can tell you
          that’s just not true.
        </Typography>
        <Typography fontSize="25px" sx={{ my: 2 }}>
          It would be good for the Democratic Party and good for the country for
          Biden to release his delegates and allow them to pick someone else to
          run against Trump. Simply put, Biden is not the strongest candidate,
          and there is plenty of time to pick someone else.
        </Typography>
        <Typography fontSize="25px" sx={{ my: 2 }}>
          In fact, party leaders could easily establish a transparent and
          orderly system for delegates to choose a new candidate in an open
          convention — a candidate who is best positioned to beat Trump.
        </Typography>
        <Typography fontSize="25px" sx={{ my: 2 }}>
          Here’s how
        </Typography>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "700px",
            width: "100%",
            my: 2,
          }}
        >
          <Image
            src="/biden5.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Typography fontSize="25px">
          Biden’s team argues: “The rules won’t allow Biden to be replaced.”
          That’s not right.
        </Typography>
        <Typography fontSize="25px" sx={{ my: 2 }}>
          It is true that if Biden does not withdraw from the race on his own,
          release his delegates and open up the convention, there is no way that
          he can be denied the nomination, short of death or disability. If he
          does take himself out of the running, however, the Democratic National
          Committee has the authority to do whatever is necessary to fill the
          vacancy under its existing rules.
        </Typography>
        <Typography fontSize="25px" sx={{ my: 2 }}>
          Article 3 of the Democratic Party’s national charter states that the
          DNC “shall have general responsibility for the affairs of the
          Democratic Party between National Conventions. ... This responsibility
          shall include filling vacancies in the nominations for the office of
          President and Vice President.”
        </Typography>
        <Typography fontSize="25px" sx={{ my: 2 }}>
          The delegates to the convention have already been chosen, and Biden’s
          withdrawal would not in any way alter the makeup of the convention.
          The delegates would still meet in Chicago from August 19-22, and they
          would still choose the Democratic Party’s nominee. There would be no
          need for the DNC to organize any additional proceedings for choosing
          delegates prior to the convention. As always, the DNC’s Rules
          Committee would organize the way in which the business of the
          convention would be conducted. If the convention were to be an open
          convention, the Rules Committee would simply take that fact into
          account in organizing the proceedings.
        </Typography>
        <Typography fontSize="25px" sx={{ my: 2 }}>
          If Biden were to release his delegates and open the convention, there
          would be at least five or six individuals who might aspire to take his
          place. The potential replacements most frequently mentioned are Vice
          President Kamala Harris; Govs. Gavin Newsom of California, Gretchen
          Whitmer of Michigan, Josh Shapiro of Pennsylvania, JB Pritzker of
          Illinois, Andy Beshear of Kentucky; and Secretary of Transportation
          Pete Buttigieg. The DNC could invite all those who were interested to
          announce their candidacy and register with the Rules Committee.
        </Typography>
        <Typography fontSize="25px" sx={{ my: 2 }}>
          If Biden withdraws by say, July 7, interested candidates might be
          given until July 15 to make their candidacy known. Then each candidate
          would be free to launch their campaign and run for the nomination in
          whatever way they saw fit. They would have over a month — between July
          15 and the beginning of the convention on Aug. 19 — to make their case
          to the convention’s delegates.
        </Typography>
        <Typography fontSize="25px" sx={{ my: 2 }}>
          How candidates chose to campaign for the nomination during this period
          would be up to them. The campaigns would almost certainly focus
          efforts on individual delegates to the convention, a total of 4,532
          people. Some candidates might spend time in the largest
          states — California and New York and Illinois. Others might organize
          events and invite delegates to state or regional meetings. Some might
          organize televised debates with each other. All could be counted on to
          raise money and hire staffs. One would assume that the Association of
          State Democratic Party Chairs would cooperate — either regionally or
          state-by-state — in organizing events that gave candidates access to
          the convention delegates.
        </Typography>
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
                border: "4px solid #AD00FF",
                height: "8px",
                width: "8px",
                borderRadius: "50%",
              }}
            ></Box>
            MORE FROM THE ASIAN CHRONICLE
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
                    <Box sx={{ bgcolor: "#AD00FF0D", height: "256px", p: 1 }}>
                      <Typography
                        fontSize="10px"
                        textAlign="center"
                        sx={{ color: "#AD00FF", my: 2 }}
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
    </>
  );
};
