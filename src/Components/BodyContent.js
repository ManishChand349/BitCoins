import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../Layout';
import BlogsSection from './BlogsSection';
import ContactSection from './ContactSection';
import DemonstrationSection from './DemonstrationSection';
import GradientCardsSection from './GradientCardsSection';
import MainTitle from './MainTitle';
import SellerCard from './SellerCard';

function BodyContent() {
  return (
    <BodyContentStyled>
         <InnerLayout>
               <MainTitle title={'Top Sellers This Month'} subtitle={'All Enterpreneurs'}/>

               <div className="sellercards">
                    <SellerCard/>
                    <SellerCard/>
                    <SellerCard/>
               </div>
               <BlogsSection/>
               <GradientCardsSection/>
               <DemonstrationSection/>
               <ContactSection/>
               <footer>
                    <p>Copyrigh @manishchandbarudi.  All Rights Reserved</p>
               </footer>
         </InnerLayout>
     </BodyContentStyled>
  )
}

const BodyContentStyled = styled.div`
   .sellercards{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin: 2rem 0;
   }
   footer{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 0;
        background-color: #020A27;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        p{
             opacity: 0.7;
        }
   }

`;
export default BodyContent;