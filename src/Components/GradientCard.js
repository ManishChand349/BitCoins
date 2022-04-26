import React from "react";
import styled from "styled-components";
import time from "../img/time.svg";
import heart from "../img/heart.svg";

function GradientCard({ image, avatar, name, price, title, ctaButton }) {
  return (
    <GradientCardStyled>
      <div className="g-card">
        <div className="inner-content">
          <div className="image">
            <img src={image} alt="" />
            <div className="name">
              <img src={avatar} alt="" />
              <p>{name}</p>
            </div>
          </div>
          <div className="card-content">
            <h6 className="card-name">{title}</h6>
            <p>
              Price <span className="price">{price}</span> &nbsp; &nbsp;
              <span className="I-text"> 1 of 15</span>{" "}
            </p>
            <p>
              Highest Bid : &nbsp; <span className="price">{price}</span>
            </p>
            <div className="duration">
              <p>
                <img src={time} alt="" />7 Hours Ago
              </p>
              <p>
                <img src={heart} alt="" />
                150 Likes
              </p>
            </div>
            <div className="cta-btns">
              {ctaButton}
            </div>
           
          </div>
        </div>
      </div>
    </GradientCardStyled>
  );
}

const GradientCardStyled = styled.div`
  border-radius: 20px;
  font-size: 1rem;
  transition: all 0.4s ease-in-out;
  background: linear-gradient(90deg, #7F41DB 0%, #022894 100%);
  animation: gradient 2s infinite;
  
  @keyframes gradient{
    0%{
      background: linear-gradient(90deg, #7F41DB 0%, #022894 100%);
    }
    50%{background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
    }
    70%{
      background: linear-gradient(130deg, #022894 0%, #7F41DB 100%);
    }
    100%{
      background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
    }
  }
  .g-card {
    margin: 0.1rem;
    .inner-content {
      background-color: #091026;
      padding: 0.4rem;
      border-radius: 20px;
      .image {
        width: 100%;
        position: relative;
        img:first-child {
          width: 100%;
          object-fit: cover;
          height: 260px;
          border-radius: 10px;
        }

        .name {
          position: absolute;
          left: 50%;
          bottom: -22px;
          border-radius: 50px;
          background-color: #03091f;
          display: flex;
          align-items: center;
          transform: translateX(-50%);
          width: 75%;
          padding: 0.3rem 0.3rem;
          border: 1px solid rgba(255, 255, 255, 0.8);
          img {
            width: 33px;
            height: 33px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 1rem;
          }
        }
      }
      .card-content {
        padding-top: 2rem;
        .card-name {
          font-size: 1rem;
          font-weight: 900;
          padding-bottom: .8rem;
          
        }
            
        p {
          font-size: 0.8rem;
        }

        .price {
          color: #6bbe92;
          font-size: 0.8rem;
        }

        .I-text {
          opacity: 0.5;
        }

        .duration {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.2);
          display: flex;
          justify-content: space-between;
          p {
            display: flex;
            align-items: center;
            img {
              object-fit: cover;
              width: 18px;
              margin-right: 0.4rem;
              align-items: center;
              display: flex;
            }
          }
        }
      }
      .cta-btns{
        width: 100%;
        
        a{
          margin: .6rem 0;
          display: inline-block;
           width: 100%;
           text-align: center;
           font-weight: 900;
        }
      }
    }
  }
`;
export default GradientCard;
