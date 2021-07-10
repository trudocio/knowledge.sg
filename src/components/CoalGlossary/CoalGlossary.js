// External Imports
import React from "react";

// Material Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Typography,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import coalDetails from "./coalDetails";
const useStyles = makeStyles((theme) => ({
  scroll: {
    height: "30vh",
    width: "600px",
  },
  tableHead: {
    color: "#225A41",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "16px",
  },
  container: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  description: {
    color: "#000000",
    fontSize: "14px",
    fontFamily: "Poppins",
    marginBottom: "10px",
  },
}));
const keyExtractor = (item, index) => item.title + index;
export default function CoalGlossary(props) {
  const classes = useStyles();
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.between("xs", "md"));
  return (
    <Box>
      <Box
        style={{
          marginLeft: "50%",
          marginTop: screenSmall ? "20%" : "9%",
          backgroundColor: "#ffffff",
          transform: "translate(-50%, -50%)",
        }}
        className={classes.scroll}
      >
        {coalDetails.map((item, i) => {
          return (
            <div>
              <Typography className={classes.tableHead}>
                {item.title}
              </Typography>
              <Typography className={classes.description}>
                {item.details}
              </Typography>
            </div>
          );
        })}
      </Box>
    </Box>
  );
}
