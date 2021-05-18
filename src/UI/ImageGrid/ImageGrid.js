// External Imports
import React from "react";
import clsx from "clsx";

// Material Imports
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core";

// Image imports
import shipyard from "../../assets/aboutUs/shipyard.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    borderRadius: "20px",
    minWidth: "250px",
    margin:theme.spacing(2)
  },
  cardActive: {
    backgroundColor: "#225A41",
    color: "#ffffff",
    minWidth: "250px",
    margin:theme.spacing(2)
  },
  tabs: {
    minHeight: "200px",
    display: "flex",
    alignItems: "center"
  },
  productText: {
    fontFamily: "'Poppins', serif",
    fontStyle: "normal",
    fontSize: "17px",
    marginTop: "20px",
    marginBottom: "20px"
  },
  productTitle: {
    fontWeight: "500"
  }
}));

export default function ImageGrid(props) {
  const { value, tabDetails, handleChange } = props;
  const classes = useStyles();
  const getCardClass = isActive => {
    return isActive ? clsx(classes.root, classes.cardActive) : classes.root;
  };

  return (
    <Grid container justify="center" alignItems="center" spacing={3}>
      {tabDetails().map((val, idx) => {
        return (
          <div>
            <Grid key={idx} justify="center" alignItems="center" container item>
              <Grid item>
                <CardActionArea>
                  <Card
                    className={getCardClass(idx === value)}
                    onClick={event => {
                      handleChange(event, idx);
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        component={() => (
                          <Box
                            className={classes.tabs}
                            style={{
                              backgroundImage: "url(" + shipyard + ")"
                            }}
                          />
                        )}
                      />
                      <CardContent align="center">
                        <Typography
                          gutterBottom
                          className={clsx(
                            classes.productText,
                            classes.productTitle
                          )}
                          align="center"
                          component="span"
                        >
                          {val.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </CardActionArea>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </Grid>
  );
}
