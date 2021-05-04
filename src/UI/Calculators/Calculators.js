// External Imports
import clsx from 'clsx';

// Material Imports
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, IconButton} from '@material-ui/core';

// Image Imports
import coalCalculator from '../../assets/aboutUs/coalCalculator.svg';

const useStyles = makeStyles((theme) => ({
  requestButton: {
    backgroundColor: '#225A41',
    color: "#FFFFFF",
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '30px',
    borderRadius: 'unset',
    /* identical to box height */
    letterSpacing: '0.08em',
  },
}))

export default function Calculators(props) {
  const { key } = props
  const classes = useStyles();
  return (
    <Grid
      container
      xs={12}
      key={key}
      justify="center"
      alignItems="center"
    >
      <Grid
        key={2}
        xs={12}
        justify="center"
        alignItems="center"
        spacing = {3}
        container
      >
        <Grid
          key={0}
          justify="center"
          alignItems="center"
          item
          >
          <Button 
          variant="contained"
          className={clsx(classes.heroText, classes.requestButton)}
          >MAKE A REQUEST TO US</Button>
        </Grid>
        <Grid
          key={1}
          justify="center"
          alignItems="center"
          item
          >
          <IconButton 
          variant="contained"
          aria-label="coal calculator"
          size="medium"
          >
            <img
              src={coalCalculator}
              alt="Coal Calculator"
              height="50px"
              >
            </img>
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}