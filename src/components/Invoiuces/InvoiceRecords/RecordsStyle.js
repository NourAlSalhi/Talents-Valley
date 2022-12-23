import styled from "styled-components";

export const Container = styled.div`
display: flex;
h2{
    margin: 38px 0px 17px 15px;
    font-weight: 500;
}
`
export const InvoiuceRecords = styled.div`
width: 834px;
height: 1621px;
padding: 34px 36px;
background-color: white;
border-radius: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
.dateStatus{
    display: flex;
    justify-content: space-between;
    width:100%;
    margin-top:30px;
}
.ds,.payment{
    display: flex;
    flex-direction: column;
}
.dateInput,.selectInput{
    width:332px;
    height: 60px;
}
.CI,.job{
    margin-top:40px;
}
.clientInput{
    display: flex;
    justify-content: space-between;
    width:100%;
}
.client{
    width: 373px;
}
.job textarea{
    width: 100%;
    height: 135px;
    margin: 12px 0px 10px;
    font-size: 18px;
    padding: 16px ;
    border: 1px solid #BEC2C6;
    border-radius: 7px;
    outline: none;
}
.payment{
    margin-top: 30px;
}
.paymentInput{
    width: 238px;
    height: 60px;
}
input[type=checkbox],.check{
    margin:34px 5px 0px;
}
.check{
    font-size:20px;
}
`