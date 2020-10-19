import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Spring } from "react-spring/renderprops";

const useStyles = makeStyles({
  title: {
    fontSize: "4rem",
    color: "white",
    paddingBottom: "2rem",
    cursor: "pointer",
    marginLeft: "3rem",
    transition: "fade .9s ease-in",
  },
  media: {
    width: 200,
    height: 200,
    clipPath:
      "polygon(30% 0%, 70% 0%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
  },
  header: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "3rem 0 5rem 0",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Container classnmaxwidth="xl" style={{ padding: 0 }}>
        <div className={classes.header}>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1000, duration: 1000 }}
          >
            {(props) => (
              <div style={props}>
                <div>
                  <h1 className={classes.title}>Allefts.io</h1>
                </div>
              </div>
            )}
          </Spring>
        </div>
      </Container>
    </div>
  );
};

export default Header;
