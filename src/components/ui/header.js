import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/logo.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

export default function Header() {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar disableGutters={true}>
          <Button
            component={Link}
            disableRipple
            onClick={() => setValue(0)}
            to="/"
            className={classes.logoContainer}
          >
            <img alt="logo" src={logo} className={classes.logo} />
          </Button>
          <Tabs
            value={value}
            textColor="inherit"
            indicatorColor="primary"
            onChange={handleChange}
            className={classes.tabContainer}
          >
            <Tab className={classes.tab} to="/" component={Link} label="Home" />
            <Tab
              className={classes.tab}
              // component={Link}
              to="/services"
              component={Link}
              label="Services"
            />
            <Tab
              className={classes.tab}
              to="/revilution"
              component={Link}
              label="The Revilution"
            />
            <Tab
              className={classes.tab}
              to="/about"
              component={Link}
              label="About Us"
            />
            <Tab
              className={classes.tab}
              to="/contact"
              component={Link}
              label="Contact Us"
            />
          </Tabs>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
}
