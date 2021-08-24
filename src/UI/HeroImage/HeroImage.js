// External Imports
// import clsx from  'clsx';

// Material Imports
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

// Image Imports
import shipyard from "../../assets/aboutUs/shipyard.jpg";

const useStyles = makeStyles((theme) => ({
  hero: {
    width: "300px",
    height: "300px",
    marginTop: "-110px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    objectFit:"fill",
    justifyContent: "center",
  },
}));

export default function HeroImage(props) {
  const { image_src } = props;
  const img = image_src ? image_src : shipyard;
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify="center"
    >
      <img src={image_src} className={classes.hero} />
    </Grid>
  );
}
