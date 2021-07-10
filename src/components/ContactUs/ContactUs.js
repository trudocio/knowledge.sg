// External Imports
import React from "react";

// Material Imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Box,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
// Internal Imports
import { Calculators, HeroImage, LinedText } from "../../UI";

// Image Imports
import pin from "../../assets/aboutUs/pin.png";
import phone from "../../assets/aboutUs/phone.png";
import mail from "../../assets/aboutUs/mail.png";
const useStyles = makeStyles((theme) => ({
  image: {
    width: "39px",
    marginRight: "20px",
    height: "39px",
  },
  box: {
    alignItems: "center",
    width: "500px",
    marginLeft: "70px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  text: {
    width: "300px",
    fontFamily: "Poppins",
    fontSize: "18px",
    marginLeft: "30px",
  },
  boxPhone: {
    alignItems: "center",
    width: "500px",
    justifyContent: "center",
    marginBottom: "20px",
  },
  imagePin: {
    width: "60px",
    height: "60px",
  },
  email: {
    width: "51.2px",
    height: "36px",
  },
  container: {
    // alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  textMain: {
    color: "#384949",
    fontSize: "18px",
    fontWeight: "900",
    fontFamily: "Poppins",
    marginLeft: "30px",
  },
  innerBox: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));

export default function ContactUs(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.between("xs", "md"));
  return (
    <React.Fragment>
      <Container>
        <Grid
          container
          direction={screenSmall ? "column" : "row"}
          justify="space-between"
          alignItems="center"
          spacing={screenSmall ? 0 : 3}
        >
          <Grid
            key={0}
            xs={screenSmall ? 12 : 6}
            justify="center"
            alignItems="center"
            item
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8334075361654!2d103.84150241470127!3d1.2731186990714265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1979b8245339%3A0xb08b46351c837b65!2sFuji%20Xerox%20Towers!5e0!3m2!1sen!2sin!4v1608382729901!5m2!1sen!2sin"
              width={screenSmall ? "500px" : "683px"}
              height="500px"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </Grid>
          <Grid
            key={1}
            xs={screenSmall ? 12 : 6}
            justify="center"
            alignItems="center"
            item
            style={screenSmall ? { marginTop: "40px" } : { marginTop: "0px" }}
          >
            <div>
              <Box display="flex" className={classes.box}>
                <img src={phone} className={classes.image}></img>
                <Box>
                  <Typography className={classes.textMain}>
                    CALL US NOW
                  </Typography>
                  <Typography className={classes.text}>
                    +65 6221 5818
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" className={classes.box}>
                <img src={pin} className={classes.imagePin}></img>
                <Box>
                  <Typography className={classes.textMain}>
                    COME VISIT US
                  </Typography>
                  <Typography className={classes.text}>
                    180 Cecil Street, <br />
                    Bangkok Bank Building #10-01 <br />
                    Singapore 069546
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" className={classes.box}>
                <Box>
                  <img src={mail} className={classes.email}></img>
                </Box>
                <Box>
                  <Typography className={classes.textMain}>
                    SEND US A MESSAGE
                  </Typography>
                  <Typography className={classes.text}>
                    contact@knowledgeglobal.sg
                  </Typography>
                </Box>
              </Box>
              <Calculators key={2} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
