// External Imports
// import clsx from  'clsx';

// Material Imports
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';

// Image Imports
import shipyard from '../../assets/aboutUs/shipyard.png';

const useStyles = makeStyles((theme) => ({
  hero: {
    maxWidth: '1100px',
    minHeight: "350px",
    marginTop:"-110px",
    marginBottom:"20px",
    display: "flex",
    alignItems: "center",
    margin: "auto",
  },
}))

export default function HeroImage(props) {
  const { image_src } = props
  const img = image_src ? image_src: shipyard
  const classes = useStyles();
  return (
  <Grid
    key={0}
    xs={12}
    justify="center"
    alignItems="center"
    item
  >
    <Box
      className={classes.hero}
      style={{ backgroundImage: "url(" + img + ")" }}
    >
    </Box>
  </Grid>
  )
}