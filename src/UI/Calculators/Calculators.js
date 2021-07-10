// External Imports
import React, { useState } from "react";
import clsx from "clsx";

// Material Imports
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, IconButton, Box } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
// Image Imports
import CloseIcon from "@material-ui/icons/Close";
import Fade from "@material-ui/core/Fade";
import coalCalculator from "../../assets/aboutUs/coalCalculator.svg";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  requestButton: {
    backgroundColor: "#225A41",
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: "20px",
    marginBottom: "40px",
    marginTop: "40px",
    lineHeight: "30px",
    borderRadius: "unset",
    /* identical to box height */
    letterSpacing: "0.08em",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    outline: "none",
    padding: theme.spacing(2, 4, 3),
  },
  innerModal: {
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    width: "233px",
    height: "56px",
    alignItems: "center",
    marginLeft: "50%",
    marginTop: "40px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#225A41",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: "20px",
  },
  input: {
    width: "569px",
    "&:before": {
      borderColor: "#225A41",
    },
    "&:after": {
      borderColor: "#225A41",
    },
  },
  select: {
    "&:before": {
      borderColor: "#225A41",
    },
    "&:after": {
      borderColor: "#225A41",
      backgroundColor: "#ffffff",
    },
    width: "569px",
  },
  selectInner: {
    "&:before": {
      borderColor: "#225A41",
    },
    "&:after": {
      borderColor: "#225A41",
      backgroundColor: "#ffffff",
    },
    root: {
      "&$selected": {
        backgroundColor: "orange",
      },
    },
    width: "200px",
    marginRight: "20px",
  },
  root: {
    marginBottom: "20px",
    "& label.Mui-focused": {
      color: "#225A41",
    },
    "& input:valid + fieldset": {
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 1,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      borderColor: "#225A41",
      color: "#225A41",
      padding: "4px !important", // override inline-style
    },
  },
  flex: {
    display: "flex",
    marginBottom: "20px",
    alignItems: "flex-start",
  },
  energy: {
    marginBottom: "20px",
    width: "100px",
    height: "20px",
  },
  selectValue: {
    marginRight: "30px",
    
  },
  selectEnergy: {
    marginRight: "78px",
    width: "100px",
    height: "20px",
  },
  heroText: {
    fontSize: "16px",
  },
}));
const useOutlinedInputStyles = makeStyles((theme) => ({
  root: {
    "&:hover $notchedOutline": {
      borderWidth: 1,
    },
    "&$focused $notchedOutline": {
      borderLeftWidth: 6,
      borderColor: "#225A41",
    },
  },
  focused: {
    backgroundColor: "#ffffff",
  },
  notchedOutline: {},
}));
export default function Calculators(props) {
  const { key } = props;
  const classes = useStyles();
  const outlinedInputClasses = useOutlinedInputStyles();
  const [open, setOpen] = React.useState(false);
  const [products, setProducts] = React.useState("");
  const [openCal, setOpenCal] = React.useState(false);
  const handleChange = (event) => {
    setProducts(event.target.value);
  };
  const to2dp = (obj) => {
    var str = String(obj);
    var index = str.indexOf(".");

    // if the number is an integer, or if it already has 2 d.p. or less
    if (index == -1 || str.length < index + 5) return obj;
    else return String(str.substring(0, index + 5));
  };
  const CalcSEUnits = () => {
    //  Get the to and from bases
    var strFromUnit =
      document.SEcalc.UnitFromName.options[
        document.SEcalc.UnitFromName.selectedIndex
      ].value;
    var strToUnit =
      document.SEcalc.UnitToName.options[
        document.SEcalc.UnitToName.selectedIndex
      ].value;
    switch (strFromUnit) {
      case "Btu/lb":
        switch (strToUnit) {
          case "Btu/lb":
            document.SEcalc.UnitToValue.value = to2dp(
              document.SEcalc.UnitFromValue.value
            );
            break;
          case "kcal/kg":
            document.SEcalc.UnitToValue.value = to2dp(
              0.555555 * document.SEcalc.UnitFromValue.value
            );
            break;
          case "MJ/kg":
            document.SEcalc.UnitToValue.value = to2dp(
              0.002326 * document.SEcalc.UnitFromValue.value
            );
            break;
        }
        break;
      case "kcal/kg":
        switch (strToUnit) {
          case "Btu/lb":
            document.SEcalc.UnitToValue.value = to2dp(
              1.8 * document.SEcalc.UnitFromValue.value
            );
            break;
          case "kcal/kg":
            document.SEcalc.UnitToValue.value = to2dp(
              document.SEcalc.UnitFromValue.value
            );
            break;
          case "MJ/kg":
            document.SEcalc.UnitToValue.value = to2dp(
              (4.1868 / 1000) * document.SEcalc.UnitFromValue.value
            );
            break;
        }
        break;
      case "MJ/kg":
        switch (strToUnit) {
          case "Btu/lb":
            document.SEcalc.UnitToValue.value = to2dp(
              429.92261 * document.SEcalc.UnitFromValue.value
            );
            break;
          case "kcal/kg":
            document.SEcalc.UnitToValue.value = to2dp(
              239.00375 * document.SEcalc.UnitFromValue.value
            );
            break;
          case "MJ/kg":
            document.SEcalc.UnitToValue.value = to2dp(
              document.SEcalc.UnitFromValue.value
            );
            break;
        }
        break;
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenCal = () => {
    setOpenCal(true);
  };

  const handleCloseCal = () => {
    setOpenCal(false);
  };
  return (
    <Grid container xs={12} key={key} justify="center" alignItems="center">
      <Grid
        key={2}
        xs={12}
        justify="center"
        alignItems="center"
        spacing={3}
        container
      >
        <Grid key={0} justify="center" alignItems="center" item>
          <Button
            onClick={() => handleOpen()}
            variant="contained"
            className={clsx(classes.heroText, classes.requestButton)}
          >
            MAKE A REQUEST TO US
          </Button>
        </Grid>
        <Grid
          onClick={() => handleOpenCal()}
          key={2}
          justify="center"
          alignItems="center"
          item
        >
          <IconButton
            variant="contained"
            aria-label="coal calculator"
            size="medium"
          >
            <img src={coalCalculator} alt="Coal Calculator" height="40px"></img>
          </IconButton>
        </Grid>
      </Grid>
      <Modal
        className={classes.modal}
        open={openCal}
        onClose={handleCloseCal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCal}>
          <div className={classes.paper}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="close"
                onClick={handleCloseCal}
                edge="end"
                disableFocusRipple={true}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div style={{ marginTop: "-50px" }}>
              <h3>Coal Conversions for Traders</h3>
              <p style={{ fontSize: "13px" }}>
                CONVERT COAL ENRGY FROM THE GIVEN BASIS TO DESIRED BASIS
              </p>
              <form id="SEcalc" name="SEcalc">
                <select name="select4" id="energy" className={classes.energy}>
                  <option>Energy</option>
                </select>
                <div className={classes.flex}>
                  <div>
                    <select
                      name="UnitFromName"
                      className={classes.selectEnergy}
                      onChange={CalcSEUnits}
                    >
                      <option value="Btu/lb">Btu/lb</option>
                      <option value="kcal/kg">kcal/kg</option>
                      <option value="MJ/kg">MJ/kg</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="UnitToName"
                      className={classes.selectEnergy}
                      onChange={CalcSEUnits}
                    >
                      <option value="Btu/lb">Btu/lb</option>
                      <option value="kcal/kg">kcal/kg</option>
                      <option value="MJ/kg">MJ/kg</option>
                    </select>
                  </div>
                </div>
                <div className={classes.flex}>
                  <div className={classes.selectValue}>
                    <input
                      name="UnitFromValue"
                      type="text"
                      size="20"
                      onChange={CalcSEUnits}
                    />
                  </div>
                  <div className={classes.selectValue}>
                    <input name="UnitToValue" type="text" size="20" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="close"
                onClick={handleClose}
                edge="end"
                disableFocusRipple={true}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="EMAIL ID"
                variant="outlined"
              />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="PHONE"
                variant="outlined"
              />
            </form>
            <FormControl variant="outlined" className={classes.root}>
              <InputLabel id="demo-simple-select-outlined-label">
                PRODUCTS
              </InputLabel>
              <Select
                style={{ backgroundColor: "#ffffff" }}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="PRODUCTS"
                value={products}
                input={
                  <OutlinedInput
                    label="PRODUCTS"
                    classes={outlinedInputClasses}
                  />
                }
                onChange={handleChange}
                displayEmpty
                className={classes.select}
              >
                {/* <MenuItem value="">
                  <em></em>
                </MenuItem> */}
                <MenuItem value={1}>Products</MenuItem>
                <MenuItem value={2}>Energy</MenuItem>
                <MenuItem value={3}>Base Metals</MenuItem>
                <MenuItem value={4}>Minerals and Ores</MenuItem>
                <MenuItem value={5}>Softs and Agri</MenuItem>
              </Select>
            </FormControl>
            <form className={classes.root} noValidate autoComplete="off">
              <FormControl variant="outlined" className={classes.Innerroot}>
                <InputLabel id="demo-simple-select-outlined-label">
                  BUY
                </InputLabel>
                <Select
                  style={{ backgroundColor: "#ffffff" }}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="BUY"
                  value={products}
                  input={
                    <OutlinedInput label="BUY" classes={outlinedInputClasses} />
                  }
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectInner}
                >
                  <MenuItem value={1}>Buy</MenuItem>
                  <MenuItem value={2}>Sell</MenuItem>
                </Select>
              </FormControl>
              <TextField
                className={classes.selectInner}
                id="outlined-basic"
                label="QUANTITY"
                variant="outlined"
              />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={classes.input}
                id="outlined-basic"
                label="COMMENTS"
                variant="outlined"
              />
            </form>
            <Button
              onClick={handleClose}
              className={clsx(classes.buttonText, classes.button)}
            >
              SUBMIT REQUEST
            </Button>
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
}
