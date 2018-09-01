/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Butto from "@material-ui/core/Button";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
import Muted from "components/Typography/Muted.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import Paginations from "components/Pagination/Pagination.jsx";
import SectionProjects from "./Section/SectionProjects.jsx";
import SectionFooter from "./Section/SectionFooter.jsx";
import SectionSimilarStories from "./Section/SectionSimilarStories.jsx";
import menuen from "./Section/menuen.jsx";
 
import CustomInput from "components/CustomInput/CustomInput.jsx";



import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import vivian from "assets/img/vivian.jpg";
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";

import styles from "./Section/footerStyle.jsx";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";
import buttonStyle from "assets/jss/material-kit-pro-react/components/buttonStyle.jsx";

class ProfilePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Vivian Seerup"
          links={<HeaderLinks/>}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "info"
          }}
          {...rest}
        />
        <Parallax
          image={require("assets/img/examples/card-project1.jpg")}
          filter="dark"
          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={vivian} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Vivian Seerup</h3>
                    <h6> JUNIOR WEB DEVELOPER | IT ENGINEER

 </h6>
                    <Button
                      href="https://www.linkedin.com/in/vivian-luisa-seerup-24a792bb/"
                      color="linkedin"
                      justIcon
                      simple
                    >
                      <i className="fab fa-linkedin" /> 
                    </Button>
                     <Button
                      href="https://github.com/viluma"
                      color="github"
                      justIcon
                      simple
                    >
                     <i className="fab fa-github" /> 
                    </Button>
                    
                  </div>
                </div>
                <div className={classes.follow}>
                  <Tooltip
                    id="tooltip-top"
                    title="Follow this user"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
                      round
                      color="primary"
                      className={classes.followButton}
                    >
                      <Add className={classes.followIcon} />
                    </Button>
                  </Tooltip>
                </div>
              </GridItem>
            </GridContainer>
            <div
              className={classNames(classes.description, classes.textCenter)}
            >
               

<p>Hi! My name is Vivian.  I am a 25 year old Web Developer with a 5 years bachelors degree in IT 
engineering seeking new challenges.<br/> I am positive, organized and team oriented in the way I work.

My main focus has been React, Wordpress and Laravel.<br/>

During my studies, I worked a with php, java(Eclipse), C++ & Matlab. <br/>

As a recent Graduate, I'm looking forward to join the job market and use my skills.</p>
<p class="">I'm available for work, get in touch!
 </p><br/><form method="get" action="cv.pdf">
   <button color="primary" type="submit" >Download Resume!</button>
</form>
            </div>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "EDUCATION",
                    tabIcon: Palette,
                    tabContent: (
                     <div
              className={classNames(classes.description, classes.textCenter)}
            >
               

<p > <h4><strong>  EDUCATION & COURSES</strong></h4>

    <p> <strong> UNIVERSITY OF ZAMBEZE   JAN 2011 -DEC 2015 </strong><br/>
IT Engineer Bachelor<br/>
 Bachelor course during 5 years at Zambeze University-Faculty of Science and Technology in Mozambique(Beira). </p> 

 <p> <strong> Languages & Computers Business   JAN2012 -FEB 2012 </strong><br/>
(Hardware Course) 
Technical course for repair and maintenance of computers. </p>

<p> <strong> Celltrack lda  2012 – 2012</strong><br/>
Installation and configuration of networks LAN 'Sunde' ved Celltrack lda & Center of information 
technologies and communication of University Zambeze.</p>

<p> <strong>Languages & Computers Business   2009 - 2010 (Social worker) </strong><br/>
One year course given by the congregation “Our Lady of Fatima’ of the Catholic Church in Mozambique to 
became a social worker. </p></p>
            </div>
                    )
                  },
                  {
                    tabButton: "EXPERIENCE",
                    tabIcon: People,
                    tabContent: (
                      <div
              className={classNames(classes.description, classes.textCenter)}
            >
               

<p > <h4><strong>EMPLOYMENT HISTORY</strong></h4>

     <p> <strong>International Airport of Beira | Technician Assistant   AUG 2015 – NOV 2015</strong><br/>

Three months internship at the International Airport of Beira ­ Mozambique at the electronic department as technical Assistant.
Key Skills: Computer network | Hardware support | Software Support  | MS Office. </p>

            <p> <strong>     Bevar´s | Freelance web developer  JUL 2015 – OCT 2015</strong><br/>

Working as freelance ruby on rails web developer at Bevar´s website
Key Skills: Ruby on rails | HTML/CSS |backt-End | Bootstrap| MS Office | JavaScript </p>

 <p> <strong>  Zambeze University| UX / Usability manager  SET 2015 – DEC 2015 </strong><br/>

As Usability Manager, I had to develop a proposal for the restructuring of the university's web system through the correction of the errors of usability present in the current system.
Key Skills: Joomla| HTML/CSS |Front-End | UX| Usability test | Ergonomics</p>

<p> <strong> Catholic Church | Social Worker  2011-2014</strong><br/>
I worked for 3 years in voluntary social service through the Catholic Church of Mozambique, 
for the support of young people and local children giving biblical teaching, 
  recreational activities and debates on health and well being and support to those in need.</p>

      </p>
            </div>
                    )
                  },
                  {
                    tabButton: "SKILLS",
                    tabIcon: Camera,
                    tabContent: (
                      <div
              className={classNames(classes.description, classes.textCenter)}
            >
               

<div id="progress">
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <div className={classes.title}>
                  <h3>Progress Bars</h3>
                </div>

                <h5>React</h5>
                <CustomLinearProgress
                  variant="determinate"
                  color="info"
                  value={30}
                />
                <h5>Wordpress</h5>
                <CustomLinearProgress
                  variant="determinate"
                  color="info"
                  value={70}
                />
                <h5>Laravel</h5>
                <CustomLinearProgress
                  variant="determinate"
                  color="info"
                  value={30}
                />
                <h5>HTML</h5>
                <CustomLinearProgress
                  variant="determinate"
                  color="info"
                  value={80}
                />
                 <h5>CSS</h5>
                <CustomLinearProgress
                  variant="determinate"
                  color="info"
                  value={80}
                />
              </GridItem>
              
            </GridContainer>
          </div>
            </div>
                    )
                  }
                ]}
              />
           
            </div>
              

            <Clearfix />
          </div>
          
        </div>
        <SectionSimilarStories/> 
        <SectionFooter/> 
        
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
