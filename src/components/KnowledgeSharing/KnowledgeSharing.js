// External Imports
import React from "react";

// Material Imports
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography, Divider } from "@material-ui/core";
import ReactSectionList from "react-sectionlist";
import sections from "./glossary.js";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  scroll: {
    height: "200px",
    // backgroundColor: "#000000",
    marginBottom: "10px",
  },
  tableHead: {
    color: "#000000",
    fontWeight: "bold",
  },
  link: {},
}));
const keyExtractor = (item, index) => item.title + index;
export default function KnowledgeSharing(props) {
  const classes = useStyles();
  const renderSectionHeader = (item, index) => {
    return (
      <Box className={classes.background}>
        <Typography id={item.title} className={classes.tableHead}>
          {item.title}
        </Typography>
      </Box>
    );
  };
  const renderItem = (item, index) => {
    return (
      <Box>
        <Box display="flex">
          <Box style={{ width: "400px" }}>
            <Typography>{item.heading}</Typography>
          </Box>
          <Box>
            <Typography>{item.subHeading}</Typography>
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <React.Fragment>
      {/* <Box
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
        display="flex"
      >
        {sections.map((item, i) => {
          return (
            <div onClick={() => window.location.replace(`#${item.title}`)}>
              <span className={classes.link}>{item.title}</span>
            </div>
          );
        })}
      </Box> */}
      <Container>
        <Box className={classes.scroll}>
          <ReactSectionList
            keyExtractor={keyExtractor}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            sections={sections}
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}
