import styled from 'styled-components';

export const Main = styled.div`
    .fullName {
        display: flex;
        margin: 32px 0;
    }
    .fullName,
    .form select {
        width: 100%;
    }
    .form select,
    .inputName input {
        height: 60px;
        font-size: medium;
        border: 1px solid #BEC2C6;
        border-radius: 7px;
    }
    .form select {
        padding: 20px;
        margin-top: 10px;
        appearance:none;
    }
    .logInput {
        margin-top:35px
    }
    .inputName input{
        width: 234px;
        margin: 9px 32px 0 0;
        padding-left: 14px;
    }
    //style phoneInput
    .PhoneInput{
        margin-top:10px;
        border-radius: 7px;
        border: 1px solid #BEC2C6;
        height: 60px;
    }
    .PhoneInputCountrySelectArrow{
        visibility: hidden;
    }
    .PhoneInputInput{
        width: 100%;
        padding: 10px;
        font-size: 18px;
        border:none;
    }
    .PhoneInputCountry{
        border-right: 1px solid #BEC2C6;
        width: 15%;
    }
    .PhoneInputCountryIcon--border{
        box-shadow:none;
        margin-left: 20px;
        width:30px;
        height:30px;
        background-color:white;
    } 

`