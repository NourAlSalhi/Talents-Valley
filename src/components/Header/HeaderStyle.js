import styled from "styled-components";

export const Container = styled.header`
width: 100%;
height: 72px;
background-color: white;
padding-top: 22px;
display: flex;
justify-content: space-between;
.logo {
    display: flex;
}
img {
    margin-top: -22px;
}
h3 {
    letter-spacing: 2px;
}
nav{
    width:20%;
    margin-right: 121px;
}
ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
}
.link {
    text-decoration: none;
    color: black;
}
.link, button,h3{
    font-size: 20px;
    font-weight: 700;
}
@media only screen and (max-width: 668px){
    nav {
        visibility: hidden;
      }
}
@media only screen and (min-width: 669px) and (max-width: 992px){
    nav {
        width: 30%;
      }
}
@media only screen and (min-width: 993px) and (max-width: 1312px){
    nav {
        width: 25%;
      }
}
`

export const Button = styled.button`
width: 107px;
height: 34px;
border-radius: 23px;
border: 1px solid #4375FF;
background-color: white;
color: #4375FF;
`