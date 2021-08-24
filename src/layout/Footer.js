import React from "react";
// import PropTypes from 'prop-types';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useMediaQuery } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Call, Place, Email } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1C2325",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginLeft: "-40px",
    minHeight: "240px",
  },
  footerGrid: {
    height: "100%",
    minHeight: "240px",
  },
  footerNestedGrid: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      minHeight: "100px",
    },
    minHeight: "150px",
  },
  footerIcon: {
    fontSize: "30px",
    [theme.breakpoints.up("md")]: {
      fontSize: "64px",
    },
    color: "#ffffff",
    marginRight: theme.spacing(2),
  },
  footerText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      width: "200px",
    },
    color: "#ffffff",
    fontFamily: "'Poppins', serif",
    fontStyle: "normal",
  },
}));

export function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <footer>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Grid
            container
            justify={screenSmall ? "flex-start" : "center"}
            spacing={0}
          >
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Paper className={classes.root} elevation={0}>
                  {value === 0 ? (
                    <Grid
                      className={classes.footerNestedGrid}
                      key={0}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <Grid key={0} justify="center" alignItems="center">
                        <Call className={classes.footerIcon} />
                      </Grid>
                      <Grid
                        className={classes.footerText}
                        key={1}
                        xs={8}
                        justify="center"
                        alignItems="center"
                      >
                        <Typography
                          className={classes.footerText}
                          variant="h6"
                          component="h6"
                          align="center"
                          style={{ fontWeight: "bold" }}
                        >
                          CALL US NOW
                        </Typography>
                        <Typography
                          className={classes.footerText}
                          component="div"
                          align="center"
                        >
                          Phone: +65 6221 5818 Fax: +65 6327 1072
                        </Typography>
                      </Grid>
                    </Grid>
                  ) : value === 1 ? (
                    <Grid
                      className={classes.footerNestedGrid}
                      key={0}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <Grid key={0} justify="center" alignItems="center">
                        <Place className={classes.footerIcon} />
                      </Grid>
                      <Grid
                        className={classes.footerText}
                        key={1}
                        xs={8}
                        justify="center"
                        alignItems="center"
                      >
                        <Typography
                          className={classes.footerText}
                          variant="h6"
                          component="h6"
                          align="center"
                          style={{ fontWeight: "bold" }}
                        >
                          COME VISIT US
                        </Typography>
                        <Typography
                          className={classes.footerText}
                          component="div"
                          align="center"
                        >
                          180 Cecil Street #10-01, Bangkok Bank Building
                          Singapore 069546
                        </Typography>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid
                      className={classes.footerNestedGrid}
                      key={0}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <Grid key={0} justify="center" alignItems="center">
                        <Email className={classes.footerIcon} />
                      </Grid>
                      <Grid
                        className={classes.footerText}
                        key={1}
                        xs={8}
                        justify="center"
                        alignItems="center"
                      >
                        <Typography
                          className={classes.footerText}
                          variant="h6"
                          component="h6"
                          align="center"
                          style={{ fontWeight: "bold" }}
                        >
                          SEND US A MESSAGE
                        </Typography>
                        <Typography
                          className={classes.footerText}
                          component="div"
                          align="center"
                        >
                          contact@knowledgeglobal.sg
                        </Typography>
                      </Grid>
                    </Grid>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
