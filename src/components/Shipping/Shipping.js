// External Imports
import React from "react";

// Material Imports
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container } from '@material-ui/core';

// Internal Imports
import { Calculators, HeroImage, LinedText } from "../../UI"

// Image Imports
import shipyard from '../../assets/aboutUs/shipyard.png';

const useStyles = makeStyles((theme) => ({}))


const tabDetails = () => {
  return [
    { 
      title: 'SHIPPING',
      image_src: '',
      content: [{ 
        heading: 'Shipping', 
        content: (
        <div>
          <p class="mt-2">
          Freight &amp; Handling  is a significant part of the cost in most commodities trading transactions and can be up to 12-20 percent of the total trades in commodities like coal and other bulk commodities. Any savings in freight rates will impact the profitability of trades positively and significantly. This is where our experienced Chartering and Shipping team comes into picture:
        </p>
        <ol class="list-items" type="I">
          <li>Excellent credentials in Chartering Market - Over 300 vessels handled</li>
          <li>Longstanding relationships with all major Vessel Owners and Operators</li>
          <li>Bulk and Containerized freight expertise</li>
          <li>Capacity to organize Storage of high value cargoes in custom bonded areas within the port areas.</li>
          <li>Longstanding and excellent relationships with landside service providers like Custom House Agents, Rail and Road Transport, Warehousing in Port areas.</li>
          <li>Last mile connectivity outside port limits to enable delivery of material right at the users/buyers warehouse or plant.</li>
        </ol> 
        </div>)
      }]
    },
  ]
}

export default function Shipping(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
      <Grid
          container
          justify="center"
          alignItems="center"
          spacing={3}
        >
        <HeroImage key={0} image_src={shipyard} />
        <LinedText key={1} value={value} tabDetails={tabDetails} />
        <Calculators key={2} />
      </Grid>
      </Container>
    </React.Fragment>
  )
};