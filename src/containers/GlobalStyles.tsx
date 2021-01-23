import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { headerHeight } from 'modules/theme';

const GlobalStyle = createGlobalStyle`
  body{
    .button-mode  {
        cursor:pointer;
    }
    .app-page {
        height: calc(100vh - ${headerHeight}px);
        max-height: calc(100vh - ${headerHeight}px);
        overflow-y: auto;
        padding: 0 30px;
    }
    .active-nav-item {
      border-bottom: 5px solid #2f8bc4;
    }
    .nav-link {
        margin-bottom: -17px;
        padding-bottom: 17px;
    }
  }
  .rbc-btn-group{
    position: absolute;
    left: 0px;
    width: 100%;
    top:0px
    button{
      position: absolute;
      left: 0px;
      top:0px
      &:first-child{
          display:none; 
      }
    }
  }
`;

export default function GlobalStyles() {
  return <GlobalStyle />;
}
