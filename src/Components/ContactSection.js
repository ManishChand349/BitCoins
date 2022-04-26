import React from 'react'
import styled from 'styled-components';
import { SectionStyled } from '../Layout';
import map from '../img/map.png'

function ContactSection() {
  return (
    <ContactSectionStyled>
         <SectionStyled>
              <div className="contact-info">
                   <h3 className="contact-title">
                        Contact Us
                   </h3>
                   <p>New Delhi, India</p> 
                   <p> +91 987 6543 2109 </p>
                   <p>manishchandr349@gmail.com</p>
              </div>

              <div className="bg-image">
                   <img src={map} alt="" />
              </div>
         </SectionStyled>
    </ContactSectionStyled>
  )
}

const ContactSectionStyled = styled.div`
background-color: #020C31;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
position: relative;
padding: 4rem 0;
z-index: 1;

p{
     opacity: 0.5;
}
.bg-image{
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     img{
          width: 80%;
          opacity: 0.07;
     }
}

`;

export default ContactSection;
