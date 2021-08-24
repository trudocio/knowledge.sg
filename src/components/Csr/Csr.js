// External Imports
import React from "react";

// Material Imports
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";

// Internal Imports
import { Calculators, HeroImage, LinedText } from "../../UI";

// Image Imports
import shipyard from "../../assets/aboutUs/csr.png";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "-60px",
    },
  },
}));

const tabDetails = () => {
  return [
    {
      title: "Corporate Social Responsibility (CSR)",
      image_src: "",
      content: [
        {
          // heading: "Corporate Social Responsibility (CSR)",
          content: (
            <div>
              <p class="mt-2">
                KISSPL takes a serious view of environmental and social
                consequences of globalized trade liberalization and investment
                expansion. As a result, we keep these concerns central to the
                way we do business with our counterparties and stakeholders.
              </p>
              <p>
                The notion of CSR has evolved over time. It began with a focus
                on philanthropy and external community affairs, but we have made
                it an integral element of our business strategies and decision
                making. We believe that CSR can yield tangible business
                benefits, including:
              </p>
              <ul class="list-items">
                <li>Cost savings (due to recycling and resource efficiency)</li>
                <li>Greater access to capital</li>
                <li>Enhanced productivity</li>
                <li>Attraction and retention of human resources</li>
                <li>Enhanced reputation and brand; and</li>
                <li>Reduced legal liability</li>
              </ul>
            </div>
          ),
        },
        {
          // heading: "Environmental Policy",
          content: (
            <div>
              <p class="mt-5">
                <strong>Environmental Policy and Basic Philosophy</strong>
              </p>
              <p class="mt-4">
                As an international trading company specializing in metals and
                minerals and poised for expansion and growth, we believe
                that"care for the global environment is a precondition to
                corporate viability" and recognize that the preservation of the
                global environment is one of the most urgent issues for all
                human beings. We are committed to the conservation of natural
                resources and to passing down a better environment to the next
                generation.
              </p>

              <p class="mt-5">
                <strong>Corporate Action Policy </strong>
              </p>

              <ul class="list-items">
                <li>
                  We shall comply with all environmental laws and regulations,
                  industry practices and other requirements in all of our
                  activities. We shall, in addition, take all practical steps
                  for conserving the environment and preventing environmental
                  pollution.
                </li>
                <li>
                  We shall evaluate our business operations on an on-going basis
                  in order to minimise waste and conserve energy and natural
                  resources. As part of this, we shall actively promote
                  recycling and the effective use of resources.
                </li>
                <li>
                  We as part of our business also disseminate our environmental
                  policy and efforts to preserve the global environment amongst
                  our business and trade partners.
                </li>
              </ul>
            </div>
          ),
        },
      ],
    },
  ];
};

export default function Csr(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root}>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <img
            src={shipyard}
            style={{ width: "98%", height: "371px", marginBottom: "20px" }}
          />
          <LinedText key={1} value={value} tabDetails={tabDetails} />
          <Calculators key={2} />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
