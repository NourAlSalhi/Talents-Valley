import styled from 'styled-components';

export const Container = styled.div`
    width: 703px;
    background-color: #FFFFFF;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 24px 102px 0 101px;
    margin: 109px auto 86px;
    .forget {
        color: #707070;
        text-decoration: none;
    }
    .errMsg{
        color: red ;
    }
    .err{
        width:100%;
        display: flex;
        justify-content: space-between;
    }
    // @media only screen and (min-width: 961px) and (max-width: 1919px) {
    //     max-height: 650px;
    //     width: 600px;
    //     margin: 40px auto;
    //     padding: 10px 70px;
    // }
    }
`
export const Title = styled.h4`
    font-weight: 600;
    font-size: 25px;
    margin: 64px 0 40px 0;
    // @media only screen and (min-width: 961px)and (max-width: 1919px) {
    //     font-size: 18px;
    //     margin: 30px 0 20px 0;
    // }
`
export const FooterSign = styled.div`
    margin-top: 60px;
    text-align: center;
    .sign {
        color: #0044FF;
        margin-left: 5px;
        text-decoration: none;
    }
    // @media only screen and (min-width: 961px)and (max-width: 1919px) {
    //     margin-top: 30px;
    // }

`