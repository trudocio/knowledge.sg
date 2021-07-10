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
import ReactSectionList from "react-sectionlist";
import sections from "./glossary.js";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import clsx from "clsx";
import SwipeableViews from "react-swipeable-views";
const useStyles = makeStyles((theme) => ({
  scroll: {
    height: "50vh",
    width: "600px",
  },
  tableHead: {
    color: "#225A41",
    fontWeight: "bold",
  },
  link: {},
}));
const keyExtractor = (item, index) => item.title + index;
export default function KnowledgeSharing(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const screenSmall = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const getTabClass = (isActive) => {
    return isActive ? clsx(classes.tab, classes.activeTab) : classes.tab;
  };
  const renderSectionHeader = (item, index) => {
    return (
      <Box>
        <Typography
          align="center"
          id={item.title}
          className={classes.tableHead}
        >
          {item.title}
        </Typography>
      </Box>
    );
  };
  const renderItem = (item, index) => {
    return (
      <Box display="flex">
        <Box
          style={{
            width: "400px",
            alignItems: "center",
            fontSize: "12px",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              width: "200px",
              fontSize: "14px",
              fontWeight: "400",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.heading}
          </Typography>
        </Box>
        <Box>
          <Typography
            style={{
              width: "200px",
              fontSize: "12px",
              alignItems: "center",
              justifyContent: "center",
            }}
            align="left"
          >
            {item.subHeading}
          </Typography>
        </Box>
      </Box>
    );
  };
  return (
    <Box>
      <Box
        style={{
          marginLeft: "50%",
          marginTop: screenSmall ? "20%" : "12%",
          backgroundColor: "#ffffff",
          transform: "translate(-50%, -50%)",
        }}
        className={classes.scroll}
      >
        <ReactSectionList
          keyExtractor={keyExtractor}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          sections={sections}
        />
      </Box>
    </Box>
  );
}
