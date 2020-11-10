import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Footer from "components/Footer/Footer.jsx";

import face1 from "assets/img/faces/card-profile6-square.jpg";
import face2 from "assets/img/faces/christian.jpg";
import face3 from "assets/img/faces/card-profile4-square.jpg";
import face4 from "assets/img/faces/card-profile1-square.jpg";
import face5 from "assets/img/faces/marc.jpg";
import face6 from "assets/img/faces/kendall.jpg";
import face7 from "assets/img/faces/card-profile5-square.jpg";
import face8 from "assets/img/faces/card-profile2-square.jpg";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.jsx";

const SectionFooter = props => {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        
      </div>
      <div>
        <Footer
          
          content={
            <div>
              <div className={classes.left}>
                <a
                  href="https://www.viluma.dk"
                  className={classes.footerBrand}
                >
                  Vivian Luisa M. Seerup
                </a>
              </div>
              <div className={classes.pullCenter}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    
                   
                      vivianseerup@gmail.com
                  
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    
                         &nbsp;  &nbsp; +4553638035
                    
                  </ListItem>
                 
                </List>
              </div>
              <div className={classes.rightLinks}>
                <ul>
                  <li>
                    <Button
                      href="https://www.linkedin.com/in/vivian-luisa-seerup-24a792bb/"
                      color="linkedin"
                      justIcon
                      simple
                    >
                      <i className="fab fa-linkedin" /> 
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://github.com/viluma"
                      color="github"
                      justIcon
                      simple
                    >
                     <i className="fab fa-github" /> 
                    </Button>

                  </li>
                  
                </ul>
              </div>
            </div>
          }
        />
        
      </div>
    </div>
  );
};

export default withStyles(styles)(SectionFooter);
