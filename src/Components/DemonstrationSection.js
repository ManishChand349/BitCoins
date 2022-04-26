import React from "react";
import styled from "styled-components";
import {SectionStyled}  from "../Layout";
import GradientCard from "./GradientCard";
import MainTitle from "./MainTitle";
import avatar from '../img/avata.jpg';
import bitcoin2 from '../img/bitcoin2.jpg';
import bitcoin from '../img/bitcoin.jpg';
import bitcoin3 from '../img/bitcoin3.jpg';
import computer from '../img/computer.jpg';
import CtaButton from './CtaButton';

function DemonstrationSection() {
  const ctaButton = <CtaButton name={'Place Bid'}/>
  return (
    <DemonstrationSectionStyled>
      <SectionStyled>
        <div className="title-con">
          <MainTitle
            title={"Live Demonstration"}
            subtitle={"live Demonstration"}
            para={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat neque, officia repudiandae tenetur doloremque harum aut, saepe illum modi ab quia docere, eius?"
            }
          />
        </div>
        <div className="gradient-cards-con">
          <GradientCard
            image={bitcoin3}
            avatar={avatar}
            name={"@Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dumny title"}
            ctaButton={ctaButton}
          />
          <GradientCard
            image={bitcoin2}
            avatar={avatar}
            name={"@Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dumny title"}
            ctaButton={ctaButton}
          />
          <GradientCard
            image={bitcoin}
            avatar={avatar}
            name={"@Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dumny title"}
            ctaButton={ctaButton}
          />
          <GradientCard
            image={computer}
            avatar={avatar}
            name={"@Joel Clock"}
            price={"0.067 ETH"}
            title={"Just a dumny title"}
            ctaButton={ctaButton}
          />
        </div>
      </SectionStyled>
    </DemonstrationSectionStyled>
  );
}

const DemonstrationSectionStyled = styled.div``;
export default DemonstrationSection;
