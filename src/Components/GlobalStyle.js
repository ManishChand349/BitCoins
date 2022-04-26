import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
*{
     margin: 0;
     padding: 0;
     list-style: none;
     box-sizing: border-box;

}


body{
     background-color: #03091F;
     font-family: 'Monserrat', sans-serif;
     font-size: .9rem;
     font-weight: 350px;
     color: white;
}

a{
     color: inherit;
     font-family: inherit;
     text-decoration: none;
}

p{
     line-height: 1.3rem;
     font-size: 0.9rem;
}

.Before{
     position: relative;
     padding-left: 2rem;
     &::before{
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 35px;
          height: 2px;
          background-color: #395FF6;
     }
}

.GradientText{
     background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
     background-clip: text;
     -webkit-text-fill-color: transparent;
     -webkit-background-clip: text;
     display: inline-block;
}

.title-con{
     text-align:center;
     width: 50%;
     margin: 0 auto;
}

.gradient-cards-con{
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
     grid-gap: 2rem;
     
}
`;

export default GlobalStyle;