// External imports
import React from "react";
// Material imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Container, Typography, Grid, useMediaQuery } from "@material-ui/core";

// Internal imports
import businessCoal from "../../../../assets/aboutUs/business/business_coal.png";
import experience from "../../../../assets/aboutUs/strengths/experience.svg";
import baseMetals from "../../../../assets/products/baseMetals.png";
import EnergyCoal from "../../../../assets/products/EnergyCoal.png";
import Commercial from "../../../../assets/products/Commercial.png";
import Digital from "../../../../assets/products/Digital.png";
import BulkTrading from "../../../../assets/products/BulkTrading.png";
import BulkShipping from "../../../../assets/products/BulkShipping.png";
import Logistics from "../../../../assets/products/Logistics.png";
import Finance from "../../../../assets/products/Finance.png";
const useStyles = makeStyles((theme) => ({
  presenceMap: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "11px",
      height: "100%",
      width: "100%",
    },
    marginTop: "11px",
    maxHeight: "350px",
  },
  strengthImageBlock: {
    display: "flex",
    justifyContent: "center",
  },
  ImageBlock: {
    minWidth: "100px",
    minHeight: "200px",
  },
  presenceMapImg1: {
    width: "120px",
    height: "120px",
    borderRadius: "60px",
  },
  presenceMapImg2: {
    width: "120px",
    height: "120px",
    borderRadius: "60px",
  },
  presenceMapImg3: {
    width: "120px",
    height: "120px",
    borderRadius: "60px",
  },
  presenceMapImg4: {
    width: "120px",
    height: "120px",
    borderRadius: "60px",
  },
  presenceMapImg5: {
    width: "120px",
    height: "120px",
    borderRadius: "60px",
  },
  presenceMapImg6: {
    width: "120px",
    height: "120px",
    borderRadius: "60px",
  },
  presenceMapImg7: {
    width: "120px",
    height: "120px",
    borderRadius: "60px",
  },
  presenceText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "12px",
    height: "50px",
    width: "300px",
    marginTop: "10px",
    marginBottom: "10px",
    lineHeight: "18px",
  },
  presenceTextMain: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "17px",
    marginTop: "20px",
    marginBottom: "50px",
    lineHeight: "25px",
  },
}));

export default function Business(props) {
  const classes = useStyles();
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.between("xs", "md"));
  return (
    <React.Fragment>
      <Container>
        <Typography className={classes.presenceTextMain} align="center">
          Part of Knowledge Group, Knowledge Singapore has built a diversified
          business both in terms of markets and products in addition to the
          legacy of being a highly successful merchant coal trading company. Our
          diversified business includes-
        </Typography>
        <Grid container justify="center" alignItems="center" spacing={0}>
          <Grid key={0} xs={8} justify="center" container>
            <Grid
              key={0}
              xs={4}
              className={classes.ImageBlock}
              justify="center"
              container
            >
              <Grid
                key={0}
                xs={12}
                className={classes.strengthImageBlock}
                justify="center"
                alignItems="flex-start"
                item
              >
                <img
                  src={EnergyCoal}
                  className={classes.presenceMapImg1}
                  alt="Presence Map"
                />
              </Grid>
              <Grid
                key={0}
                xs={8}
                className={classes.strengthImageBlock}
                justify="center"
                item
              >
                <Typography
                  className={classes.presenceText}
                  component="p"
                  align="center"
                >
                  Energy coal origination
                </Typography>
              </Grid>
            </Grid>
            <Grid
              key={0}
              xs={4}
              className={classes.ImageBlock}
              justify="center"
              container
            >
              <Grid
                key={0}
                xs={12}
                className={classes.strengthImageBlock}
                justify="center"
                alignItems="flex-start"
                item
              >
                <img
                  src={BulkShipping}
                  className={classes.presenceMapImg2}
                  alt="Presence Map"
                />
              </Grid>
              <Grid
                key={0}
                xs={8}
                className={classes.strengthImageBlock}
                justify="center"
                item
              >
                <Typography
                  className={classes.presenceText}
                  component="p"
                  align="center"
                >
                  Dry bulk shipping
                </Typography>
              </Grid>
            </Grid>
            <Grid
              key={0}
              xs={4}
              className={classes.ImageBlock}
              justify="center"
              container
            >
              <Grid
                key={0}
                xs={12}
                className={classes.strengthImageBlock}
                justify="center"
                alignItems="flex-start"
                item
              >
                <img
                  src={BulkTrading}
                  className={classes.presenceMapImg3}
                  alt="Presence Map"
                />
              </Grid>
              <Grid
                key={0}
                xs={8}
                className={classes.strengthImageBlock}
                justify="center"
                item
              >
                <Typography
                  className={classes.presenceText}
                  component="p"
                  align="center"
                >
                  Physical bulk commodity trading
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid key={0} xs={12} justify="center" container>
            <Grid
              key={0}
              xs={3}
              className={classes.ImageBlock}
              justify="center"
              alignItems="center"
              container
            >
              <Grid
                key={0}
                xs={6}
                className={classes.strengthImageBlock}
                justify="center"
                alignItems="flex-start"
                item
              >
                <img
                  src={Logistics}
                  className={classes.presenceMapImg4}
                  alt="Attractive Solutions"
                />
              </Grid>
              <Grid
                key={0}
                xs={8}
                className={classes.strengthImageBlock}
                justify="center"
                alignItems="center"
                item
              >
                <Typography
                  className={classes.presenceText}
                  component="p"
                  align="center"
                >
                  Land-based and sea borne logistics
                </Typography>
              </Grid>
            </Grid>
            <Grid
              key={0}
              xs={3}
              className={classes.ImageBlock}
              justify="center"
              alignItems="center"
              container
            >
              <Grid
                key={0}
                xs={8}
                className={classes.strengthImageBlock}
                justify="center"
                alignItems="center"
                item
              >
                <img
                  src={Finance}
                  className={classes.presenceMapImg5}
                  alt="Attractive Solutions"
                />
              </Grid>
              <Grid
                key={0}
                xs={8}
                className={classes.strengthImageBlock}
                justify="center"
                alignItems="center"
                item
              >
                <Typography
                  className={classes.presenceText}
                  component="p"
                  align="center"
                >
                  Related trade finance and risk management
                </Typography>
              </Grid>
            </Grid>
            <Grid
              key={0}
              xs={3}
              className={classes.ImageBlock}
              justify="center"
              alignItems="center"
              container
            >
              <Grid
                key={0}
                xs={8}
                className={classes.strengthImageBlock}
                justify="center"
                alignItems="center"
                item
              >
                <img
                  src={Commercial}
                  className={classes.presenceMapImg6}
                  alt="Attractive Solutions"
                />
              </Grid>
              <Grid
                key={0}
                xs={8}
                className={classes.strengthImageBlock}
                justify="center"
                alignItems="center"
                item
              >
                <Typography
                  className={classes.presenceText}
                  component="p"
                  align="center"
                >
                  Consulting on techno-commercial issues & structured merchant
                  financing
                </Typography>
              </Grid>
            </Grid>
            <Grid
              key={0}
              xs={3}
              className={classes.ImageBlock}
              justify="center"
              alignItems="center"
              container
            >
              <Grid
                key={0}
                xs={8}
                className={classes.strengthImageBlock}
                justify="center"
                alignItems="center"
                item
              >
                <img
                  src={Digital}
                  className={classes.presenceMapImg7}
                  alt="Attractive Solutions"
                />
              </Grid>
              <Grid
                key={0}
                xs={8}
                className={classes.strengthImageBlock}
                justify="center"
                alignItems="center"
                item
              >
                <Typography
                  className={classes.presenceText}
                  component="p"
                  align="center"
                >
                  Digitalising the international trading ecosystem
                  with a recent venture into Trade Tech
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
