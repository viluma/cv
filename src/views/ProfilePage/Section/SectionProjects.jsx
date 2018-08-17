/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
//import ContentCopy from "@material-ui/icons/ContentCopy";
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Badge from "components/Badge/Badge.jsx";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

import office2 from "assets/img/examples/office2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import clemonojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import job from "assets/img/job.png";
import cardProject3 from "assets/img/examples/card-project3.jpg";
import cardProject4 from "assets/img/examples/card-project4.jpg";
import cardProject5 from "assets/img/examples/card-project5.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";

function SectionProjects({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      {/* Project 1 START */}
      
          
            
      {/* Project 1 END */}
      {/* Project 2 START */}
     
      {/* Project 2 END */}
      {/* Project 3 START */}
      <div
        className={`${classes.projects} ${classes.sectionDark} ${
          classes.projects3
        }`}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <Muted>
                <h6></h6>
              </Muted>
              <h2 className={classes.title}>
                Some of my Awesome work
              </h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={clemonojeghuo} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>Africa in copenhagen</h6>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>
                      Blog 
                    </h4>
                  </a>
                  <p className={classes.cardDescription}>
                    African in copenhagen is a blog developed for a client, I worked with wordpress.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card plain className={classes.card2}>
                <a href="https://www.academia.edu/19746501/Proposta_de_reestrutura%C3%A7%C3%A3o_do_sistema_web_atraves_da_avalia%C3%A7%C3%A3o_de_usabilidade_na_universidade_Zambeze" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={job} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>My paper</h6>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>
                      User experience and usability testing techniques
                    </h4>
                  </a>
                  <p className={classes.cardDescription}>
                   Biography about the study of usability and user experience in the web system.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            
          </GridContainer>
        </div>
      </div>
      {/* Project 3 END */}
      {/* Project 4 START */}
      
      {/* Project 4 END */}
    </div>
  );
}

export default withStyles(projectsStyle)(SectionProjects);
