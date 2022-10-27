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
        font-size: medium;
        border: 1px solid #BEC2C6;
        border-radius: 7px;
    }
    .form select {
        height: 60px;
        padding: 20px;
        margin-top: 10px;
    }
    // style PhoneInput
    .phoneInput,.logInput {
        margin-top:35px
    }
    .inputName input,.react-tel-input {
        width: 234px;
        height: 60px;
        margin: 9px 32px 0 0;
        padding-left: 14px;
    }
    .react-tel-input{
        padding-left:0px;
    }
    .form-control{
        font-size: 18px;
        height: 60px;
        width: 500px;
        padding-left: 70px;
    }
    .selected-flag{
        width:60px;
        padding: 0 0 0 20px;
    }
    .flag-dropdown{
        background-color: white;
    }
    .arrow{
        visibility: hidden;
    }
`