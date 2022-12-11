import styled from "styled-components";

export const Main = styled.div`
img{
    margin: 32px auto 40px 215px;

}
p{
    font-size:20px;
    font-weight:600;
    color:#707070;
    text-align:left;
}
.logInput{
    margin-top:35px;
    text-align:left;
    display:flex;
    flex-direction: column;
}
form select{
    margin-top:9px;
    height:60px;
}
.error{
    color: red;
    padding-top: 20px;
    font-weight: 400;
    font-size: 12px;
}
.icons{
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
}
`

export const Upload = styled.div`
width: 100%;
height: 60px;
border: 1px solid #BEC2C6;
border-radius:7px;
text-align: center;
padding-top: 17px;
margin-top:40px;
label{
    font-size:18px;
    font-weight:600;
    margin-left:15px;
}
`
export const UploadFill = styled.div`
width: 100%;
height: 60px;
background-color: #E2E2E2;
border: 1px solid #BEC2C6;
border-radius:7px;
padding-top: 8px;
margin-top:40px;
`