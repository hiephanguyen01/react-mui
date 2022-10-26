import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: ".75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
}));
export const Footer = ({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Box display={{ xs: "none", md: "block" }}>
        <Grid
          container
          justifyContent={"center"}
          spacing={6}
          mt={0.5}
          className={classes.mainContainer}
        >
          <Grid item>
            <Grid container direction={"column"}>
              <Grid
                component={Link}
                to="/"
                onClick={() => {
                  setValue(0);
                }}
                item
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                component={Link}
                to="/services"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                item
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                item
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                item
                className={classes.link}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                component={Link}
                to="/websites"
                onClick={() => {
                  setValue(2);
                }}
                item
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                component={Link}
                to="/revolution"
                onClick={() => {
                  setValue(3);
                }}
                item
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                onClick={() => {
                  setValue(3);
                }}
                item
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                onClick={() => {
                  setValue(3);
                }}
                item
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                component={Link}
                to="/revolution"
                onClick={() => {
                  setValue(3);
                }}
                item
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                component={Link}
                to="/about"
                onClick={() => {
                  setValue(4);
                }}
                item
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                component={Link}
                to="/about"
                onClick={() => {
                  setValue(4);
                }}
                item
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                component={Link}
                to="/about"
                onClick={() => {
                  setValue(4);
                }}
                item
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                component={Link}
                to="/contact"
                onClick={() => {
                  setValue(5);
                }}
                item
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <img className={classes.adornment} src={footer} alt="footer" />
    </footer>
  );
};
