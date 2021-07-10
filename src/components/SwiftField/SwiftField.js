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
import {
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
  category7,
} from "./field.js";
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
    width: "600px",
    height: "32vh",
  },
  tableHead: {
    color: "#225A41",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  category: {
    color: "#212529",
    fontSize: "16px",
    fontWeight: 900,
    marginTop: "15px",
    fontFamily: "Poppins",
  },
  categoryTitle: {
    fontSize: "10px",
    fontFamily: "Poppins",
    color: "#212529",
  },
  link: {},
}));
const keyExtractor = (item, index) => item.title + index;
export default function SwiftField(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const screenSmall = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const renderSectionHeader = (item, index) => {
    return (
      <Box
        display="flex"
        style={{
          width: "490px",
          alignItems: "center",
          fontSize: "12px",
          marginBottom: "10px",
          justifyContent: "space-between",
        }}
      >
        <Typography
          align="center"
          id={item.title}
          className={classes.tableHead}
        >
          {item.title}
        </Typography>
        <Typography
          align="center"
          id={item.title}
          className={classes.tableHead}
        >
          Description
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
    <Box
      style={{
        marginLeft: "50%",
        marginTop: screenSmall ? "20%" : "9%",
        backgroundColor: "#ffffff",
        transform: "translate(-50%, -50%)",
      }}
      className={classes.scroll}
    >
      <Box>
        <p>
          <small className={classes.categoryTitle}>
            SWIFT groups message types into the following categories:
            <br />
            For explanations of the 2001, 2002, 2003, 2004, 2006, 2007, and 2008
            versions, see the SWIFT Web site at{" "}
            <a href="http://www.swift.com">http://www.swift.com.</a>
          </small>
        </p>
        <Typography className={classes.category}>
          Category 1 Messages – Customer Payments and Cheques
        </Typography>
        <ReactSectionList
          keyExtractor={keyExtractor}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          sections={category1}
        />
      </Box>
      <Box>
        <Typography className={classes.category}>
          Category 2 Messages – Financial Institution Transfers
        </Typography>
        <ReactSectionList
          keyExtractor={keyExtractor}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          sections={category2}
        />
      </Box>
      <Box>
        <Typography className={classes.category}>
          Category 3 Messages – Treasury Markets: Foreign Exchange and
          Derivatives
        </Typography>
        <ReactSectionList
          keyExtractor={keyExtractor}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          sections={category3}
        />
      </Box>
      <Box>
        <Typography className={classes.category}>
          Category 4 Messages – Collections and Cash Letters
        </Typography>
        <Typography className={classes.categoryTitle}>
          The table below lists the Category 4 message types, Collections and
          Cash Letters, with the type designation MT 4xx. Table 4 Collections
          and Cash Letters
        </Typography>
        <ReactSectionList
          keyExtractor={keyExtractor}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          sections={category4}
        />
      </Box>
      <Box>
        <Typography className={classes.category}>
          Category 5 Messages – Securities Markets
        </Typography>
        <ReactSectionList
          keyExtractor={keyExtractor}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          sections={category5}
        />
      </Box>
      <Box>
        <Typography className={classes.category}>
          Category 6 Messages – Treasury Markets: Precious Metals & Syndications
        </Typography>
        <ReactSectionList
          keyExtractor={keyExtractor}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          sections={category6}
        />
      </Box>
      <Box>
        <Typography className={classes.category}>
          Category 7 Messages – Documentary Credits and Guarantees
        </Typography>
        <ReactSectionList
          keyExtractor={keyExtractor}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          sections={category7}
        />
      </Box>
    </Box>
  );
}
