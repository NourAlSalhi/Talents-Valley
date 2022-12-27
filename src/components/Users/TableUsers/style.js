import styled from "styled-components";

export const Tabel = styled.table`
width 1649px;
max-height: 821px;
margin: 10px auto;
background-color: white;
border-radius: 15px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
padding: 17px 40px;
th{
    font-size: 20px;
    color: #707070;
    font-weight: 500;

}
td{
    font-size: 18px;
    padding: 39px 50px;
}
.icon{
    color:white;
    background-color: gray;
    border-radius: 20px;
    padding: 8px 15px;
    margin-right:28px;
}
.menu{
    display: flex;
    justify-content: space-between;
}
tr:nth-child(even){
    background-color: #F5F5F5;
}
`;