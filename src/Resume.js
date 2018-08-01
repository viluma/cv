import React, { Component } from 'react';
import './Resume.css';
import {Layout, Content } from 'react-mdl';
import { Parallax, Background } from 'react-parallax';






class Resume extends Component {
  render() {
    return( <div>

<div>
    <Parallax
      blur={0.25}
      bgImage={require('./assets/cpk1.jpg')}
      bgImageAlt="the cat"
      strength={200}
      bgheight={'auto'}
      opacity='0%'
    >


      <div style={{ height: '300px' }} >

      <h1 class="avisoo">RESUME</h1> </div>
    </Parallax>

</div>

<div class="testo">
<h3><strong>Resume</strong></h3>
  <div class="res"><form method="get" action="cv.pdf">
   <button class="button2" type="submit">Download Resume!</button>
</form>

  </div>
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
became a social worker. </p>

<p > <h4><strong>  SKILLS</strong></h4>
*React<br/>
*HTML<br/>
*CSS<br/>
*Wordpress<br/>
*Mysql<br/>
*PHP

<p > <h4><strong> LANGUAGES</strong></h4>
*English- Read and Write<br/>
*Portuguese-(Native Language)

</p>
  <p > <h4><strong>  HOBBIES</strong></h4>
-Music <br/>-Chess</p>

</p>  



    </p>

    
        </div>

</div>

    )
  }
}

export default Resume;                  