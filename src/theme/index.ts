

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { textStyles } from "./textStyles";


// 1. Global color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// global styles
const styles = {
    global: {
    html: {
      backgroundColor: "#0B0D17",
      color: "#ffffff",
      fontFamily: "'Barlow Condensed', sans-serif",
    },
    body: {
      
      fontFamily: "'Barlow Condensed', sans-serif",
      margin: 0,
      padding: 0,
    },
    "*": {
      boxSizing: "border-box",
    },
    },
  }



export const theme = extendTheme({
     config,
     styles,
         colors: {
          dark: " #0B0D17",
          white:  "#ffffff",
          lightBlue: " #D0D6F9"
       },
        fonts: {
        heading:  "'Bellefair', serif",
        subheading:  "'Barlow Condensed', sans-serif",
        body:  "'Barlow Condensed', sans-serif",
       },
      fontSizes: {
          h1:  "9.375rem" , // 150px
        h2:  "6.25rem" ,  // 100px
        h3:  "3.5rem" ,   // 56px
        h4:  "2rem" ,     // 32px
        h5:  "1.75rem" ,  // 28px
        body:  "1.125rem" , // 18px
        subheading1:  "1.75rem" ,
        subheading2:  "0.875rem" ,
      },
      
      fontWeights: {
        normal:  400,
        medium:  500,
        bold:  700,
      },

      letterSpacings: {
      wide:  "4.75px" ,
      normal:  "0px" ,
      },
     
      breakpoints: {
        base:  "0em" , // 0px
        sm:  "30em" ,  //480px
        md:  "48em" , //768px
        lg:  "62em" , //992px
        xl:  "80em" ,  //1280px
        "2xl":  "96em" , //1536px
     },
    textStyles,
   
    semanticTokens:  {
      colors: {
    bg: { default: "dark", _dark: "dark" },
    text: { default: "white", _dark: "white" },
    subtext: { default: "lightBlue", _dark: "lightBlue" },
      },
     },

     
    
  });
    



