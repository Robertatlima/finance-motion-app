import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #FFB800;
    --color-primary-variable-1:  #FFD600;
    --color-secondary: #1A8E88;
    --color-secondary-variable-1: #31847F;
    --color-danger: #C63A3A;
    --color-grey100: #111111;
    --color-grey50: #878787;
    --color-grey20: #E0E0E0;
    --color-grey0: #F5F5F5;
    --color-negative: #E60000;
    --color-warning: #FFCD07;
    --color-success: #168821;
    --color-information: #155BCB;
}
body{

   background-color: var(--color-grey0);
   color: var(--color-gray100);
   font-family: "Inter" , sans-serif;
}
h1{
    font-size: 26px;
}
h2{
    font-size: 22px;
}
h3{
    font-size: 18px;
}
p{
    font-size: 16px;
}
.MuiFormControl-root{
    margin-top: 0 !important; 
    margin-bottom: 1rem !important;
}
`;
export default GlobalStyle;
