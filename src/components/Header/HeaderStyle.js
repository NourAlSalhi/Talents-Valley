import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 72px;
font-size: 20px;
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
.links {
    margin-right: 121px;
}
.link {
    margin-right: 51px;
    text-decoration: none;
    color: black;
}
.link, button,h3{
    font-size: 20px;
    font-weight: 700;
}
button {
    width: 107px;
    height: 34px;
    border-radius: 23px;
    border: 1px solid #4375FF;
    background-color: white;
    color: #4375FF;
}

`

