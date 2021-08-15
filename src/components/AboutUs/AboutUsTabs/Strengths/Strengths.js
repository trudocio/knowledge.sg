// External imports
import React from "react";

// Material imports
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

// Internal imports
import experience from "../../../../assets/aboutUs/strengths/experience.svg";
import systems from "../../../../assets/aboutUs/strengths/systems.svg";
import services from "../../../../assets/aboutUs/strengths/services.svg";
import solutions from "../../../../assets/aboutUs/strengths/solutions.svg";
import speciality from "../../../../assets/aboutUs/strengths/speciality.svg";

const useStyles = makeStyles((theme) => ({
  presenceMap: {
    marginTop: "11px",
    maxHeight: "350px",
  },
  presenceText: {
    fontFamily: "'Poppins', serif",
    fontStyle: "normal",
    fontSize: "17px",
    marginTop: "20px",
    marginBottom: "20px",
    lineHeight: "25px",
  },
  strengthImageBlock: {
    display: "flex",
  },
  ImageBlock: {
    minWidth: "300px",
  },
}));

export default function Strengths(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid key={0} xs={12} justify="center" container>
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
                  src={experience}
                  className={classes.presenceMap}
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
                  Experience across complete logistics spectrum – Procurement,
                  Logistics and Delivery
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
                  src={systems}
                  className={classes.presenceMap}
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
                  Strong Systems and Procedures to drive contract delivery and
                  manage risks
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
                  src={services}
                  className={classes.presenceMap}
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
                  Servicing diversified Client-base of State-Owned-Enterprises
                  (SOEs), Public and Private Companies including Industrials and
                  Traders
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid key={1} xs={12} justify="center" alignItems="center" container>
            <Grid
              key={0}
              xs={4}
              className={classes.ImageBlock}
              justify="center"
              alignItems="center"
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
                  src={solutions}
                  className={classes.presenceMap}
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
                  Proven capability in offering attractive structured contract
                  and finance solutions
                </Typography>
              </Grid>
            </Grid>
            <Grid
              key={0}
              xs={4}
              className={classes.ImageBlock}
              justify="center"
              alignItems="flex-start"
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
                  src={speciality}
                  className={classes.presenceMap}
                  alt="Speciality in domain"
                />
              </Grid>
              <Grid
                key={0}
                xs={8}
                className={classes.strengthImageBlock}
                justify="center"
                item
              ></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
