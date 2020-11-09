import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormatQuote from "@material-ui/icons/FormatQuote";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Danger from "components/Typography/Danger.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Button from "components/CustomButtons/Button.jsx";

import blog6 from "assets/img/examples/clem-onojeghuo.jpg";
import blog8 from "assets/img/job.png";
import blog7 from "assets/img/examples/blog7.jpg";
import christian from "assets/img/julia.jpg";
import cardProfile1Square from "assets/img/julia.jpg";

import sectionSimilarStoriesStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionSimilarStoriesStyle.jsx";

function SectionSimilarStories({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12}>
            <h2 className={classes.title + " " + classes.textCenter}>
              Work
            </h2>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog6} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog6 + ")",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Info>
                      <h6>JupiterChild</h6>
                    </Info>
                    <h4 className={classes.cardTitle}>
                      <a href="https://jupiterchildart.herokuapp.com/">
                        Touristic blog
                      </a>
                    </h4>
                    <p className={classes.description}>
                      JupiterChild it's an artist website build with Django and bootstrap.
                      <a href="https://jupiterchildart.herokuapp.com/"> See Website</a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog8} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog8 + ")",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Success>
                      <h6>UsabiltyOfWebsites</h6>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">
                        Bibliography about usability study on websites.
                      </a>
                    </h4>
                    <p className={classes.description}>
                       "companies that do not join to technological strategies, are at risk of lagging behind compared to its competitors.
                        However, not enough to join a Web system is necessary to pay attention usability"
                      <a href="https://unizambeze.academia.edu/VivianAbulukule"> Read More </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  <FormatQuote />
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                    It was a great pleasure to have worked with you, and I am very happy with the results, I wish you all the best in your career.
                    . everything. Keep up the great work!
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>Ndinembo Child</h4>
                  <h6 className={classes.cardCategory}> <Button
                      href="https://www.instagram.com/ndinembojulia/"
                      color="github"
                      justIcon
                      simple
                    >
                     <i className="fab fa-instagram" /> 
                    </Button>
                    </h6>
                  <CardAvatar testimonial testimonialFooter>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile1Square} alt="..." />
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default withStyles(sectionSimilarStoriesStyle)(SectionSimilarStories);
