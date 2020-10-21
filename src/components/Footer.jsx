import React from "react";
import { FaGithub, FaTwitch, FaLinkedin } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    flexShrink: "0",
    flexFlow: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: "2rem",
    background: "lightblue",
  },
  footerItems: {
    margin: ".5rem .5rem 0 .5rem",
  },
  footerLinks: {
    textDecoration: "none",
    color: "black",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footer}>
        {/* <p className={classes.footerCreation}>Website Created by Allef Soares</p> */}
        <a
          className={classes.footerLinks}
          href="https://github.com/allefts?tab=repositories"
        >
          <FaGithub className={classes.footerItems} />
        </a>
        <a className={classes.footerLinks} href="/">
          <FaTwitch className={classes.footerItems} />
        </a>
        <a className={classes.footerLinks} href="/">
          <FaLinkedin className={classes.footerItems} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
