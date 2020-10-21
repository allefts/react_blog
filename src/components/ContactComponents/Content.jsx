import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GrGithub } from "react-icons/gr";
import { FaFacebook, FaTwitch } from "react-icons/fa";
import { AiFillThunderbolt, AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const useStyles = makeStyles({
  contactHeader: {
    textDecoration: "underline blue",
    color: "white",
    fontSize: "3rem",
    marginTop: "3rem",
    textAlign: "center",
  },
  contactContainer: {
    maxWidth: "50em",
  },
  contacts: {
    display: "flex",
    flexWrap: "wrap",
    border: "none",
    margin: "1.5rem 0 1.5rem 0",
  },
  contact: {
    position: "relative",
    padding: "0",
    listStyle: "none",
    flex: "1 0 50%",
    margin: "1.5rem 0",
    borderRadius: "5px",
    transition: "all .5s ease",
    justifyContent: "center",
    alignItems: "center",

    "&:hover": {
      background: "lightblue",
    },
  },
  contactLink: {
    textDecoration: "none",
    color: "white",
    margin: "1rem 0",
    textAlign: "center",
    transition: "all .5s ease",
    "&:hover": {
      color: "black",
    },
  },
  icons: {
    fontSize: "2rem",
    marginRight: "0",
    float: "left",
  },
  iconText: {
    textAlign: "center",
    textDecoration: "underline blue",
  },
});

const ContactContent = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.contactHeader}>Contact</h1>

      <div className={classes.contactWrapper}>
        <Container className={classes.contactContainer} maxWidth="sm">
          <ul className={classes.contacts}>
            <li className={classes.contact}>
              <a className={classes.contactLink} href="github.com/allefts">
                <p className={classes.iconText}>
                  <GrGithub className={classes.icons} />
                  Github
                </p>
              </a>
            </li>
            <li className={classes.contact}>
              <a className={classes.contactLink} href="facebook.com">
                <p className={classes.iconText}>
                  <FaFacebook className={classes.icons} />
                  Facebook
                </p>
              </a>
            </li>
            <li className={classes.contact}>
              <a className={classes.contactLink} href="twitch.tv">
                <p className={classes.iconText}>
                  <FaTwitch className={classes.icons} />
                  Twitch
                </p>
              </a>
            </li>
            <li className={classes.contact}>
              <a className={classes.contactLink} href="/stackblitz.com">
                <p className={classes.iconText}>
                  <AiFillThunderbolt className={classes.icons} />
                  StackBlitz
                </p>
              </a>
            </li>
            <li className={classes.contact}>
              <a className={classes.contactLink} href="/instagram/xxallefxx">
                <p className={classes.iconText}>
                  <AiFillInstagram className={classes.icons} />
                  Instagram
                </p>
              </a>
            </li>
            <li className={classes.contact}>
              <p className={classes.contactLink}>
                <MdEmail className={classes.icons} />
                @alleftsoares@gmail.com
              </p>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default ContactContent;
