import styled from "styled-components";

export const Main = styled.div`
img{
    margin:32px 0 40px 205px;
}
.para{
    font-size: 20px;
    font-weight: 600;
    color: #707070;
    text-align: left;
    margin-bottom: 32px;
}
.address{
    display:flex;
    justify-content: space-between;
    margin-top:35px;
}
.address1,.address2{
    display:flex;
    flex-direction: column;
}
.inputAddress , .country{
    width: 243px;
    height: 60px;
    border: 1px solid #BEC2C6;
    border-radius: 7px;
    margin-top: 9px;
    padding: 20px;
    font-size: 16px;
}
select{
    appearance: none;
}
.icons{
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
}
`