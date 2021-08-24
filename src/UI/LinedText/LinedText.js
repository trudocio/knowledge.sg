// Material Imports 
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroText:{
    fontFamily:"Poppins",
    fontSize:"14px",
  }
}))


export default function LinedText(props) {
  const { value, tabDetails } = props
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
    >
    {tabDetails()[value].content.map((val, idx) => {
      return (<Grid
          key={1}
          xs={12}
          justify="center"
          alignItems="center"
          item
        >
          <Typography
            className={classes.heroText}
            component="p">
              {val.heading}
          </Typography>
          {/* <hr style={{border: "0.5px solid #000000;"}} /> */}
          <Typography
            className={classes.heroText}
            component="p">
              {val.content}
          </Typography>
        </Grid>)
    })}
    </Grid>
  )
} 
