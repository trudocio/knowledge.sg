// External Imports
import React from "react";

// Material Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  div,
  Box,
  useMediaQuery,
} from "@material-ui/core";

// Internal Imports
import { Calculators, HeroImage, LinedText } from "../../UI";

// Image Imports
import shipyard from "../../assets/products/Shipping.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    },
    height: "111px",
    display: "flex",
    fontFamily: "Poppins",
    padding: "12px",
    borderWidth: 1,
    fontSize: "15px",
    borderColor: "#225A41",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "7px",
    border: "1px solid #225A41;",
    textAlign: "center",
  },
  root: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },
}));

const tabDetails = () => {
  return [
    {
      title: "SHIPPING",
      image_src: "",
      content: [
        {
          // heading: "Shipping",
          content: (
            <div>
              <p class="mt-2">
                Freight &amp; Handling is a significant part of the cost in most
                commodities trading transactions and can be up to 12-20 percent
                of the total trades in commodities like coal and other bulk
                commodities. Any savings in freight rates will impact the
                profitability of trades positively and significantly. This is
                where our experienced Chartering and Shipping team comes into
                picture:
              </p>
              <ul class="list-items" type="disc">
                <li>
                  Excellent credentials in Chartering Market - Over 300 vessels
                  handled
                </li>
                <li>
                  Longstanding relationships with all major Vessel Owners and
                  Operators
                </li>
                <li>Bulk and Containerized freight expertise</li>
                <li>
                  Capacity to organize Storage of high value cargoes in custom
                  bonded areas within the port areas.
                </li>
                <li>
                  Longstanding and excellent relationships with landside service
                  providers like Custom House Agents, Rail and Road Transport,
                  Warehousing in Port areas.
                </li>
                <li>
                  Last mile connectivity outside port limits to enable delivery
                  of material right at the users/buyers warehouse or plant.
                </li>
              </ul>
            </div>
          ),
        },
      ],
    },
  ];
};

export default function Shipping(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <Container className={classes.root}>
        <Grid container justify="center" alignItems="center" spacing={3}>
          {screenSmall ? (
            <HeroImage image_src={shipyard} />
          ) : (
            <img
              src={shipyard}
              style={{ width: "98%", height: "371px", marginBottom: "20px" }}
            />
          )}
          <Typography
            align="center"
            style={{ marginBottom: "40px", fontFamily: "Poppins" }}
          >
            Freight & Handling is a significant part of the cost in most
            commodities trading transactions and can be up to 12-20 percent of
            the total trades in commodities like coal and other bulk
            commodities. Any savings in freight rates will impact the
            profitability of trades positively and significantly. Here’s where
            our experienced Chartering and Shipping team comes into the picture:
          </Typography>
          {/* <LinedText key={1} value={value} tabDetails={tabDetails} /> */}
          <Grid
            style={{ marginLeft: "20px", marginRight: "20px" }}
            container
            spacing={3}
          >
            <Grid item xs={12} md={3} lg={3}>
              <Box boxShadow={5} className={classes.paper}>
                Excellent credentials in the chartering market - Over 300
                vessels handled
              </Box>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Box boxShadow={5} className={classes.paper}>
                Longstanding relationships with all major vessel owners and
                operators
              </Box>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Box boxShadow={5} className={classes.paper}>
                Bulk and Containerized freight expertise
              </Box>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Box boxShadow={5} className={classes.paper}>
                Capacity to organize storage of high value cargoes in custom
                bonded areas within the port areas.
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box boxShadow={5} className={classes.paper}>
                Last mile connectivity outside port limits to enable delivery of
                material right at the user’s/buyer’s warehouse or plant.
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box boxShadow={5} className={classes.paper}>
                Longstanding and excellent relationships with landside service
                providers like Custom House Agents, Rail and Road Transport, and
                Warehousing in port areas.
              </Box>
            </Grid>
          </Grid>
          <Calculators key={2} />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
