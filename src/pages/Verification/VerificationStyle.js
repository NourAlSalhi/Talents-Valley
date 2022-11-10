import styled from "styled-components";


export const Title = styled.h3`
font-weight: 600;
font-size: 30px;
text-align: center;
`
export const Main = styled.div`
.para{
    font-size: 20px;
    font-weight: 600;
    margin-top: 37px;
    margin-bottom:32px;
}
.verifPara{
    margin: 10px 0 10px 0;
}
.verifPara, .details{
    font-size:14px;
}
button{
    
}
`
export const Contain = styled.div`
width:100%;
height:88px;
padding:20px 30px 20px 24px;
border-radius:7px;
border: 1px solid #E2E2E2;
background-color:#F3F4F6;
display:flex;
justify-content: space-between;
.title{
    font-size:18px;
    font-weight:500;
    margin-bottom:5px;
}
span{
    color:red;
}
button{
    background-color:#4375FF;
    border: 1px solid #E2E2E2;
    border-radius:7px;
    width:114px;
    height: 31px;
    color:white;
    margin-top:9px;
}
`