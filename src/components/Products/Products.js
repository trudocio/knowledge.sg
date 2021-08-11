// External Imports
import React from "react";

// Material Imports
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import baseMetals from "../../assets/products/baseMetals.png";
import energy from "../../assets/products/energy.png";
import minerals from "../../assets/products/minerals.png";
import giri from "../../assets/products/giri.png";
// Internal Imports
import { ImageGrid, LinedText, Calculators } from "../../UI";

const useStyles = makeStyles((theme) => ({
  productText: {
    fontFamily: "'Poppins', serif",
    fontStyle: "normal",
    fontSize: "17px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  productTitle: {
    fontWeight: "500",
  },
  heroDetailsText: {
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "111.4%",
  },
  scrollToTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  requestButton: {
    backgroundColor: "#225A41",
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "30px",
    borderRadius: "unset",
    /* identical to box height */
    letterSpacing: "0.08em",
  },
  fabIcon: {
    color: "#225A41",
  },
}));

const tabDetails = () => {
  return [
    {
      title: "ENERGY",
      image_src: energy,
      content: [
        {
          heading: "Thermal Coal",
          content:
            "Thermal coal (also known as steam coal) is a grade between bituminous coal and anthracite, once widely used as a fuel for steam locomotives. It is a grade of coal used in electric power plants to generate steam to create electricity. It can be used to fire power plants that produce steam for electricity and industrial uses.",
        },
        {
          heading: "Coking Coal",
          content:
            "Coking coal, also referred to as metallurgical coal, is used for the manufacture of coke, one of the main irreplaceable inputs for steel production.",
        },
      ],
    },
    {
      title: "BASE METAL",
      image_src: baseMetals,
      content: [
        {
          heading: "Base Metals",
          content:
            "Base metals are common metals that tarnish, oxidize, or corrode relatively quickly when exposed to air or moisture. They are widely used in commercial and industrial applications, such as construction and manufacturing. Base metals include copper, lead, nickel, aluminium and zinc. They are often more abundant in nature and easier to mine which makes base metals far less expensive for use in manufacturing than precious metals, such as gold, silver, and platinum.",
        },
      ],
    },
    {
      title: "MINERALS & ORES",
      image_src: minerals,
      content: [
        {
          heading: "Minerals & Ores",
          content:
            "Minerals are solid substances that are present in nature and can be made of one element or more elements combined together (chemical compounds). Some of the major mineral groups are Native Elements (e.g. gold, Silver, Diamond, Graphite), Oxides (e.g., Sapphire), Silicates, Sulfates (e.g., Baryte (Barite), Gypsum), Sulfides, Carbonates (e.g. Calcite, Magnesite) and Halides (e.g. Halite (Also known as rock salt), Fluorite).",
        },
      ],
    },
    {
      title: "SOFTS & AGRI",
      image_src: giri,
      content: [
        {
          heading: "Softs & Agri",
          content:
            "There are various types of edible oils such as sunflower oil, olive oil, grapeseed oil, soybean oil and palm oil.",
        },
      ],
    },
  ];
};

export default function Products(props) {
  const { children } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <ImageGrid
          value={value}
          // tabDetails={tabDetails}
          tabDetails={tabDetails}
          handleChange={handleChange}
        />
        {/* <br />
        <LinedText value={value} tabDetails={tabDetails} />
        <br /> */}
        <div style={{ height: "50px" }}></div>
        <Calculators />
      </Container>
      {children}
    </React.Fragment>
  );
}
