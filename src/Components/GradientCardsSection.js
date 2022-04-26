import React from 'react'
import styled from 'styled-components';
import { SectionStyled } from '../Layout';
import GradientCard from './GradientCard';
import MainTitle from './MainTitle';
import person from '../img/person.jpg';
import avatar from '../img/avata.jpg';
import person3 from '../img/person3.jpg';
import bitcoin2 from '../img/bitcoin2.jpg';
import bitcoin from '../img/bitcoin.jpg';
import bitcoin3 from '../img/bitcoin3.jpg';
import computer from '../img/computer.jpg';
import CtaButton from './CtaButton';

function GradientCardsSection() {
  return (
    <GradientCardsSectionStyled>
         <SectionStyled>
              <div className="title-con">
                   <MainTitle title={'New Upcoming Items'} subtitle={'Discover Upcoming Items'} para={'Lorem ipsum sit amet, consectetur adipiscing elit. Sed quit accumsan nisi Ut ut felis congue nisi hendrerit commodo.'}/>
              </div>
              <div className="gradient-cards-con">
                   <GradientCard image={person} avatar={avatar} name={"@Joel Clock"} price={'0.067 ETH'} title={'Just a dumny title'}/>
                   <GradientCard image={person3} avatar={avatar} name={"@Joel Clock"} price={'0.067 ETH'} title={'Just a dumny title'}/>
                   <GradientCard image={computer} avatar={avatar} name={"@Joel Clock"} price={'0.067 ETH'} title={'Just a dumny title'}/>
                   <GradientCard image={person} avatar={avatar} name={"@Joel Clock"} price={'0.067 ETH'} title={'Just a dumny title'}/>
                   <GradientCard image={bitcoin3} avatar={avatar} name={"@Joel Clock"} price={'0.067 ETH'} title={'Just a dumny title'}/>
                   <GradientCard image={bitcoin2} avatar={avatar} name={"@Joel Clock"} price={'0.067 ETH'} title={'Just a dumny title'}/>
                   <GradientCard image={bitcoin} avatar={avatar} name={"@Joel Clock"} price={'0.067 ETH'} title={'Just a dumny title'}/>
                   <GradientCard image={computer} avatar={avatar} name={"@Joel Clock"} price={'0.067 ETH'} title={'Just a dumny title'}/>
                   
              </div>
              <div className="cta-btn">
              <CtaButton name={'View More'}/>
            </div>
         </SectionStyled>
    </GradientCardsSectionStyled>
  )
}

const GradientCardsSectionStyled = styled.div`
.cta-btn{
     padding-top: 3rem;
     text-align: center;
     a{

          font-weight: 900;
     }
}
`;
export default GradientCardsSection;